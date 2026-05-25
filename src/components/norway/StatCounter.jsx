import React, { useState, useEffect, useRef } from 'react';

export default function StatCounter({ end, suffix = '', prefix = '', duration = 2000, label, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-mono text-4xl md:text-5xl font-bold text-cyan text-glow-cyan">
        {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}
      </div>
      {label && <p className="mt-2 text-sm text-glacier/50 font-medium uppercase tracking-wider">{label}</p>}
    </div>
  );
}
import React from 'react';

export default function SectionHeader({ tag, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16`}>
      {tag && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-mono font-semibold uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-inter font-bold text-glacier leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-glacier/50 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
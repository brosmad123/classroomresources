import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

const questions = [
  {
    q: 'What percentage of Norway\'s electricity comes from renewable sources?',
    options: ['About 50%', 'About 75%', 'About 98%', 'About 60%'],
    correct: 2,
    explanation: 'Norway generates approximately 98% of its electricity from renewable sources, primarily hydropower.',
  },
  {
    q: 'Which renewable source is the backbone of Norway\'s energy grid?',
    options: ['Solar Power', 'Wind Energy', 'Hydropower', 'Geothermal'],
    correct: 2,
    explanation: 'Hydropower accounts for roughly 88% of Norway\'s total electricity generation.',
  },
  {
    q: 'What percentage of new cars sold in Norway are electric?',
    options: ['About 30%', 'About 50%', 'About 65%', 'About 82%'],
    correct: 3,
    explanation: 'In 2024, over 82% of all new cars sold in Norway were fully electric.',
  },
  {
    q: 'How many hydropower plants does Norway operate?',
    options: ['About 200', 'About 500', 'About 1,700', 'About 3,000'],
    correct: 2,
    explanation: 'Norway has over 1,700 hydropower plants across the country.',
  },
  {
    q: 'What is Hywind Tampen?',
    options: ['A Norwegian city', 'The world\'s largest floating wind farm', 'A hydroelectric dam', 'An EV charging network'],
    correct: 1,
    explanation: 'Hywind Tampen is the world\'s largest floating offshore wind farm, located in the North Sea.',
  },
  {
    q: 'By what year does Norway aim to be carbon neutral?',
    options: ['2025', '2030', '2040', '2050'],
    correct: 1,
    explanation: 'Norway has set one of the world\'s most ambitious targets: carbon neutrality by 2030.',
  },
  {
    q: 'How long is Norway\'s coastline?',
    options: ['5,000 km', '10,000 km', '25,000+ km', '50,000 km'],
    correct: 2,
    explanation: 'Including fjords and islands, Norway\'s coastline stretches over 25,000 kilometers.',
  },
  {
    q: 'What makes Norway\'s geography ideal for hydropower?',
    options: ['Flat plains', 'Desert climate', 'Steep mountains & heavy rainfall', 'Tropical weather'],
    correct: 2,
    explanation: 'Norway\'s steep mountain terrain and abundant precipitation create massive elevation drops perfect for turbines.',
  },
];

export default function EnergyQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const question = questions[current];

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === question.correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  if (showResult) {
    return (
      <GlassCard className="max-w-2xl mx-auto text-center py-12">
        <div className="stat-mono text-6xl font-bold text-cyan text-glow-cyan mb-4">
          {score}/{questions.length}
        </div>
        <p className="text-xl text-glacier mb-2">
          {score === questions.length ? 'Perfect Score!' : score >= 6 ? 'Great Job!' : score >= 4 ? 'Good Effort!' : 'Keep Learning!'}
        </p>
        <p className="text-glacier/50 mb-8">
          You answered {score} out of {questions.length} questions correctly.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan/30 text-glacier font-medium text-sm hover:bg-cyan/10 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
      </GlassCard>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-mono text-glacier/40 uppercase tracking-wider">
          Question {current + 1} of {questions.length}
        </span>
        <span className="text-xs font-mono text-cyan">
          Score: {score}
        </span>
      </div>
      <div className="h-1 rounded-full bg-white/5 mb-8">
        <div
          className="h-full rounded-full bg-cyan transition-all duration-500"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <GlassCard>
        <h3 className="text-xl font-bold text-glacier mb-6">{question.q}</h3>
        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            let borderClass = 'border-white/10 hover:border-white/20';
            let bgClass = 'bg-white/[0.02]';
            if (answered) {
              if (idx === question.correct) {
                borderClass = 'border-emerald/50';
                bgClass = 'bg-emerald/10';
              } else if (idx === selected && idx !== question.correct) {
                borderClass = 'border-red-500/50';
                bgClass = 'bg-red-500/10';
              }
            } else if (idx === selected) {
              borderClass = 'border-cyan/40';
              bgClass = 'bg-cyan/5';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left px-5 py-4 rounded-xl border ${borderClass} ${bgClass} transition-all duration-200 flex items-center gap-3`}
              >
                <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-xs font-mono text-glacier/50 shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-sm text-glacier/80">{opt}</span>
                {answered && idx === question.correct && <CheckCircle2 className="w-4 h-4 text-emerald ml-auto shrink-0" />}
                {answered && idx === selected && idx !== question.correct && <XCircle className="w-4 h-4 text-red-500 ml-auto shrink-0" />}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="text-sm text-glacier/60">{question.explanation}</p>
          </div>
        )}

        {answered && (
          <button
            onClick={handleNext}
            className="mt-6 w-full py-3 rounded-xl bg-cyan/10 border border-cyan/20 text-cyan font-medium text-sm hover:bg-cyan/20 transition-colors"
          >
            {current < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </GlassCard>
    </div>
  );
}
import React from 'react';
import { opportunitiesData } from '../data/portfolio';
import { Smartphone, Code, Layers, Sparkles, ArrowRight } from 'lucide-react';

export default function Opportunities() {
  const iconsMap = {
    Smartphone: Smartphone,
    Code: Code,
    Layers: Layers,
    Sparkles: Sparkles
  };

  return (
    <section id="looking-for" className="py-20 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {opportunitiesData.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {opportunitiesData.description}
          </p>
          <div className="mt-3 h-1 w-16 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* Opportunity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunitiesData.items.map((item, idx) => {
            const IconComponent = iconsMap[item.icon] || Smartphone;

            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
                  <span className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                    Open to Hire
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-base shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Contact Me About an Opportunity</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}

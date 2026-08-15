import React from 'react';
import { skillsData } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Smartphone, Database, Wrench, Code2, Check, Sparkles } from 'lucide-react';

export default function Skills() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const categoryIcons = {
    mobile: { icon: Smartphone, color: "text-sky-500", bg: "bg-sky-50 dark:bg-sky-950/60", badgeBg: "border-sky-200 dark:border-sky-800" },
    backend: { icon: Database, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/60", badgeBg: "border-emerald-200 dark:border-emerald-800" },
    tools: { icon: Wrench, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950/60", badgeBg: "border-purple-200 dark:border-purple-800" },
    development: { icon: Code2, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/60", badgeBg: "border-amber-200 dark:border-amber-800" },
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal-item ${isVisible ? 'is-revealed' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Practical hands-on technologies and software development practices
          </p>
          <div className="mt-3 h-1 w-16 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([key, category], cIdx) => {
            const config = categoryIcons[key] || categoryIcons.mobile;
            const IconComponent = config.icon;

            return (
              <div
                key={key}
                style={{ transitionDelay: `${150 + cIdx * 100}ms` }}
                className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-effect text-left flex flex-col justify-between reveal-item ${isVisible ? 'is-revealed' : ''}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3.5 rounded-2xl ${config.bg} ${config.color} shrink-0 shadow-sm`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2.5 mt-6">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 hover:bg-sky-50 dark:hover:bg-sky-950/70 hover:text-sky-700 dark:hover:text-sky-300 hover:border-sky-300 dark:hover:border-sky-800 transition-all duration-200 hover:scale-105"
                      >
                        <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

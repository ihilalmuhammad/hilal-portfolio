import React from 'react';
import { educationData } from '../data/portfolio';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Academic qualifications and achievements
          </p>
          <div className="mt-3 h-1 w-16 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative text-left">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex flex-col sm:flex-row items-center">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-4 border-sky-500 shadow-md flex items-center justify-center text-sky-600 dark:text-sky-400 z-10 hidden sm:flex">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Card wrapper */}
                  <div className={`w-full sm:w-[45%] ${isEven ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto sm:text-left'}`}>
                    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 transition-all space-y-4">
                      
                      {/* Period Badge */}
                      <div className={`flex items-center space-x-2 text-xs font-bold text-sky-600 dark:text-sky-400 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>

                      {/* Degree Title */}
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                          {item.degree}
                        </h3>
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                          {item.institution}
                        </p>
                      </div>

                      {/* Grade & Scholarship Badges */}
                      <div className={`flex flex-wrap gap-2 pt-1 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <span className="px-3 py-1 rounded-xl text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                          {item.grade}
                        </span>
                        {item.badge && (
                          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center space-x-1">
                            <Award className="w-3.5 h-3.5" />
                            <span>{item.badge}</span>
                          </span>
                        )}
                      </div>

                      {/* Highlights */}
                      {item.highlights && (
                        <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          {item.highlights.map((hl, hIdx) => (
                            <div key={hIdx} className={`flex items-start space-x-2 ${isEven ? 'sm:justify-end' : ''}`}>
                              <span className="text-slate-400 shrink-0">•</span>
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

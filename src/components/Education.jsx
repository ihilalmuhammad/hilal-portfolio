import React from 'react';
import { educationData } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from 'lucide-react';

export default function Education() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="education" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal-item ${isVisible ? 'is-revealed' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Academic qualifications and merit achievements
          </p>
          <div className="mt-3 h-1 w-16 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative text-left">
          
          {/* Animated Vertical Line */}
          <div 
            className={`absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-blue-500 to-indigo-500 -translate-x-1/2 hidden sm:block transition-all duration-1000 origin-top ${
              isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
            }`} 
          />

          <div className="space-y-12">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex flex-col sm:flex-row items-center">
                  
                  {/* Timeline Node Icon */}
                  <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 border-2 border-sky-500 shadow-lg flex items-center justify-center text-sky-600 dark:text-sky-400 z-10 hidden sm:flex transition-transform duration-500 ${
                    isVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-45'
                  }`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  {/* Card Content Wrapper */}
                  <div className={`w-full sm:w-[45%] ${isEven ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto sm:text-left'}`}>
                    <div 
                      style={{ transitionDelay: `${200 + idx * 150}ms` }}
                      className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-effect space-y-4 reveal-item ${
                        isVisible ? 'is-revealed' : ''
                      }`}
                    >
                      
                      {/* Period Badge */}
                      <div className={`flex items-center space-x-2 text-xs font-extrabold text-sky-600 dark:text-sky-400 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>

                      {/* Degree Title */}
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                          {item.degree}
                        </h3>
                        <p className="text-sm font-bold text-slate-600 dark:text-slate-300 mt-1">
                          {item.institution}
                        </p>
                      </div>

                      {/* Grade & Scholarship Badges */}
                      <div className={`flex flex-wrap gap-2 pt-1 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <span className="px-3.5 py-1 rounded-xl text-xs font-bold bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 shadow-xs">
                          {item.grade}
                        </span>
                        {item.badge && (
                          <span className="px-3.5 py-1 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center space-x-1.5 shadow-xs">
                            <Award className="w-3.5 h-3.5" />
                            <span>{item.badge}</span>
                          </span>
                        )}
                      </div>

                      {/* Highlights */}
                      {item.highlights && (
                        <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          {item.highlights.map((hl, hIdx) => (
                            <div key={hIdx} className={`flex items-start space-x-2 ${isEven ? 'sm:justify-end' : ''}`}>
                              <span className="text-sky-500 font-bold shrink-0">•</span>
                              <span className="font-normal">{hl}</span>
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

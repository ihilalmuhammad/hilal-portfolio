import React from 'react';
import { personalInfo } from '../data/portfolio';
import { GraduationCap, Building2, Calendar, Award, Briefcase, Bot } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: "Education",
      value: "BS Software Engineering",
      icon: GraduationCap,
      color: "text-sky-600 dark:text-sky-400",
      bg: "bg-sky-50 dark:bg-sky-950/50"
    },
    {
      title: "University",
      value: "Riphah International University",
      icon: Building2,
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-950/50"
    },
    {
      title: "Graduation",
      value: "2026",
      icon: Calendar,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-950/50"
    },
    {
      title: "CGPA",
      value: "3.90 / 4.00",
      subtitle: "Fully Funded Scholarship",
      icon: Award,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-950/50"
    },
    {
      title: "Availability",
      value: "Open to Opportunities",
      subtitle: "Flutter Internship / Junior Roles",
      icon: Briefcase,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/50"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="mt-2 h-1 w-16 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main About Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                I recently completed my <strong className="text-slate-900 dark:text-white font-semibold">BS Software Engineering</strong> from <strong className="text-slate-900 dark:text-white font-semibold">Riphah International University, Islamabad</strong>. I have practical experience working on Flutter mobile applications, including <strong className="text-sky-600 dark:text-sky-400 font-semibold">Sportify</strong> and <strong className="text-teal-600 dark:text-teal-400 font-semibold">Edovra</strong>.
              </p>
              
              <div className="p-4 rounded-xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-800/60 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-sky-500 text-white shrink-0 mt-0.5">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm text-sky-950 dark:text-sky-200 leading-relaxed">
                  <span className="font-bold text-sky-900 dark:text-sky-100">AI-Assisted Workflow:</span> I use AI-assisted development tools to help with coding, debugging, understanding unfamiliar concepts, and improving application features.
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                My current goal is to strengthen my independent development skills through real-world experience, mentorship, teamwork, and professional software development.
              </p>
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {cards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 transition-all flex items-center space-x-4"
                >
                  <div className={`p-3.5 rounded-xl ${card.bg} ${card.color} shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                      {card.title}
                    </span>
                    <div className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {card.value}
                    </div>
                    {card.subtitle && (
                      <div className="text-xs font-medium text-sky-600 dark:text-sky-400 mt-0.5">
                        {card.subtitle}
                      </div>
                    )}
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

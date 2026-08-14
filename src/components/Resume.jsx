import React from 'react';
import { personalInfo } from '../data/portfolio';
import { FileText, Download, CheckCircle, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-left border border-slate-800">
          
          {/* Subtle bg glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold uppercase tracking-wider">
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                My Resume
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Interested in working with me? Download my latest CV for complete details on my Software Engineering coursework, mobile projects, and technical skills.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-1">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  <span>BS Software Engineering (CGPA 3.90)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  <span>Flutter / Dart Practical Projects</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center">
              <a
                href={personalInfo.cvPath}
                download="Hilal-Muhammad-CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-base shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>

              <span className="text-[11px] text-slate-400 mt-2 text-center md:text-right w-full">
                PDF Format • Public Asset
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { projectsData } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Smartphone, ExternalLink, Play, CheckCircle, Info, X, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePlayStoreClick = (project) => {
    if (project.playStoreUrl && project.playStoreUrl.trim() !== "") {
      window.open(project.playStoreUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Edovra Google Play Store URL is published. Add your official app link in src/data/portfolio.js under 'playStoreUrl'.");
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal-item ${isVisible ? 'is-revealed' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Real-world mobile applications built with Flutter & Firebase
          </p>
          <div className="mt-3 h-1 w-16 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, pIdx) => (
            <div
              key={project.id}
              style={{ transitionDelay: `${200 + pIdx * 150}ms` }}
              className={`rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-effect overflow-hidden flex flex-col justify-between reveal-item ${isVisible ? 'is-revealed' : ''}`}
            >
              <div className="p-6 sm:p-8 space-y-6 text-left">
                
                {/* Header Badge & Title */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="inline-block text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                      {project.role}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sky-50 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400 shrink-0 shadow-sm">
                    <Smartphone className="w-6 h-6" />
                  </div>
                </div>

                {/* Main Description */}
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  "{project.description}"
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Functionality:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                    {project.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-8 py-4 bg-slate-50/90 dark:bg-slate-950/70 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                {project.id === "sportify" ? (
                  <>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-600/20 transition-all hover:scale-105"
                    >
                      <Info className="w-4 h-4" />
                      <span>View Details</span>
                    </button>

                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold italic">
                      {project.statusText}
                    </span>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handlePlayStoreClick(project)}
                      className="inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Google Play</span>
                    </button>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      <Info className="w-4 h-4" />
                      <span>Overview</span>
                    </button>
                  </>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal with Animated Scale Entrance */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-left max-h-[90vh] flex flex-col transition-all transform duration-300">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/60">
              <div>
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  {selectedProject.role}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Detailed Overview
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  All Key Features & Responsibilities
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <ShieldCheck className="w-4.5 h-4.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4.5 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition-all"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

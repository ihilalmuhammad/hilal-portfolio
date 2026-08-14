import React from 'react';
import { personalInfo } from '../data/portfolio';
import GithubIcon from './GithubIcon';
import { Mail, MessageSquare, Smartphone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800 text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-sky-600 flex items-center justify-center text-white">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-sky-400 font-semibold tracking-wide uppercase">
              {personalInfo.title}
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Software Engineering graduate with practical experience in Flutter mobile application development & AI-assisted workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
              <a href="#education" className="hover:text-sky-400 transition-colors">Education</a>
              <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                Social & Direct
              </h4>
              <div className="flex items-center space-x-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-sky-400 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <span>© 2026 Hilal Muhammad. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">Built with React, Vite & Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
}

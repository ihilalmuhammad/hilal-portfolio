import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import GithubIcon from './GithubIcon';
import { 
  FolderGit2, 
  FileText, 
  Mail, 
  MessageSquare, 
  Smartphone, 
  ArrowRight, 
  Award,
  Sparkles
} from 'lucide-react';

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 12, y: -y * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Hero Ambient Backdrop Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none -z-10 opacity-70 dark:opacity-40">
        <div className="absolute top-10 left-10 w-80 h-80 bg-sky-400/25 dark:bg-sky-500/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content with Staggered Entrance */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Sequence 1: Availability Badge (0ms delay) */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-200/80 dark:border-sky-800/80 text-sky-700 dark:text-sky-300 text-xs font-bold tracking-wide shadow-sm animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
              </span>
              <span>Available for Flutter Internship / Junior Roles</span>
            </div>

            {/* Sequence 2: Main Heading "Hi, I'm Hilal Muhammad" (100ms delay) */}
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400">Hilal Muhammad</span>
              </h1>
            </div>

            {/* Sequence 3: Professional Title (200ms delay) */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 flex flex-wrap items-center gap-2">
                <span>Flutter Developer</span>
                <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
                <span className="text-sky-600 dark:text-sky-400 font-semibold">Software Engineering Graduate</span>
              </h2>
            </div>

            {/* Sequence 4: Description (300ms delay) */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '300ms' }}>
              Software Engineering graduate with practical experience in Flutter mobile application development and AI-assisted development. Currently seeking a Flutter Developer Internship or Junior Mobile Developer opportunity where I can learn, contribute, and grow with an experienced development team.
            </p>

            {/* Sequence 5: Main CTA Buttons (400ms delay) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                <FolderGit2 className="w-4.5 h-4.5" />
                <span>View My Projects</span>
              </a>

              <a
                href={personalInfo.cvPath}
                download="Hilal-Muhammad-CV.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                <FileText className="w-4.5 h-4.5 text-sky-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 font-bold text-sm transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                <Mail className="w-4.5 h-4.5 text-slate-600 dark:text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Sequence 6: Social & Direct Connect Links (500ms delay) */}
            <div className="pt-4 flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Connect Directly:
              </span>
              <div className="flex items-center space-x-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-300 dark:hover:border-sky-700 transition-all shadow-sm hover:scale-110"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-300 dark:hover:border-emerald-800 transition-all shadow-sm hover:scale-110"
                  aria-label="WhatsApp Contact"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:border-sky-300 dark:hover:border-sky-800 transition-all shadow-sm hover:scale-110"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Mobile Visual / Interactive IDE Card with Parallax Tilt */}
          <div 
            className="lg:col-span-5 relative flex justify-center perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="relative w-full max-w-sm rounded-3xl bg-slate-900 p-4.5 shadow-2xl border border-slate-800 ring-1 ring-white/10 transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`
              }}
            >
              {/* Device Header */}
              <div className="flex justify-between items-center px-4 py-2 border-b border-slate-800 text-[11px] text-slate-400">
                <span className="font-bold text-white flex items-center space-x-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Flutter Dev Environment</span>
                </span>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-emerald-400">Dart SDK 3.x</span>
                </div>
              </div>

              {/* Code Snippet Card */}
              <div className="mt-3.5 p-4 rounded-2xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 leading-relaxed overflow-hidden text-left shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-500">
                  <span>lib/main.dart</span>
                  <span className="text-sky-400 font-sans text-[10px] bg-sky-950 px-2 py-0.5 rounded-full font-semibold border border-sky-800">
                    AI-Assisted Workflow
                  </span>
                </div>
                <div className="space-y-1">
                  <div><span className="text-purple-400">class</span> <span className="text-amber-300">HilalPortfolioApp</span> <span className="text-purple-400">extends</span> <span className="text-teal-300">StatelessWidget</span> &#123;</div>
                  <div className="pl-4"><span className="text-purple-400">@override</span></div>
                  <div className="pl-4"><span className="text-sky-300">Widget</span> <span className="text-blue-400">build</span>(<span className="text-sky-300">BuildContext</span> context) &#123;</div>
                  <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-teal-300">MaterialApp</span>(</div>
                  <div className="pl-12">title: <span className="text-emerald-300">'Hilal Muhammad'</span>,</div>
                  <div className="pl-12">home: <span className="text-amber-300">FlutterDeveloperProfile</span>(</div>
                  <div className="pl-16">cgpa: <span className="text-orange-300">3.90</span>,</div>
                  <div className="pl-16">degree: <span className="text-emerald-300">'BS Software Eng.'</span>,</div>
                  <div className="pl-16">projects: [<span className="text-emerald-300">'Sportify'</span>, <span className="text-emerald-300">'Edovra'</span>],</div>
                  <div className="pl-12">),</div>
                  <div className="pl-8">);</div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              </div>

              {/* Mobile App UI Preview */}
              <div className="mt-3.5 p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-200">Featured Mobile Projects</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold border border-emerald-800/60">
                    Google Play Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60 hover:border-sky-500/60 transition-colors">
                    <div className="font-bold text-xs text-sky-400">Sportify</div>
                    <div className="text-[10px] text-slate-400 truncate">Sports Management</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60 hover:border-teal-500/60 transition-colors">
                    <div className="font-bold text-xs text-teal-400">Edovra</div>
                    <div className="text-[10px] text-slate-400 truncate">Educational App</div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-4 -left-4 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl flex items-center space-x-3 text-left">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white">CGPA 3.90 / 4.00</div>
                  <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">Fully Funded Scholarship</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

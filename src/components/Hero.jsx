import React from 'react';
import { personalInfo } from '../data/portfolio';
import GithubIcon from './GithubIcon';
import { 
  FolderGit2, 
  FileText, 
  Mail, 
  MessageSquare, 
  Smartphone, 
  ArrowRight, 
  Sparkles,
  Award,
  CheckCircle2
} from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none -z-10 opacity-60 dark:opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200/80 dark:border-sky-800/60 text-sky-700 dark:text-sky-300 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>Available for Flutter Internship / Junior Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400">Hilal Muhammad</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span>Flutter Developer</span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="text-sky-600 dark:text-sky-400 font-medium">Software Engineering Graduate</span>
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Software Engineering graduate with practical experience in Flutter mobile application development and AI-assisted development. Currently seeking a Flutter Developer Internship or Junior Mobile Developer opportunity where I can learn, contribute, and grow with an experienced development team.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
              </a>

              <a
                href={personalInfo.cvPath}
                download="Hilal-Muhammad-CV.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Contact Links */}
            <div className="pt-4 flex items-center space-x-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect Directly:
              </span>
              <div className="flex items-center space-x-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-300 dark:hover:border-sky-700 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-300 dark:hover:border-emerald-800 transition-all shadow-sm"
                  aria-label="WhatsApp Contact"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:border-sky-300 dark:hover:border-sky-800 transition-all shadow-sm"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Mobile Visual / IDE Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Phone Frame Simulator Container */}
            <div className="relative w-full max-w-sm rounded-3xl bg-slate-900 p-4 shadow-2xl border border-slate-800 ring-1 ring-white/10">
              
              {/* Phone Header / Dynamic Island */}
              <div className="flex justify-between items-center px-4 py-2 border-b border-slate-800 text-[11px] text-slate-400">
                <span className="font-semibold text-white">Flutter Dev Environment</span>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Dart SDK 3.x</span>
                </div>
              </div>

              {/* Code Snippet Card */}
              <div className="mt-3 p-4 rounded-2xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 leading-relaxed overflow-hidden">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-500">
                  <span>lib/main.dart</span>
                  <span className="text-sky-400 font-sans text-[10px] bg-sky-950 px-2 py-0.5 rounded">AI-Assisted Workflow</span>
                </div>
                <div className="space-y-1">
                  <div><span className="text-purple-400">class</span> <span className="text-amber-300">HilalPortfolioApp</span> <span className="text-purple-400">extends</span> <span className="text-teal-300">StatelessWidget</span> &#123;</div>
                  <div className="pl-4"><span className="text-purple-400">@override</span></div>
                  <div className="pl-4"><span className="text-sky-300">Widget</span> <span className="text-blue-400">build</span>(<span className="text-sky-300">BuildContext</span> context) &#123;</div>
                  <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-teal-300">MaterialApp</span>(</div>
                  <div className="pl-12">title: <span className="text-emerald-300">'Hilal Muhammad Portfolio'</span>,</div>
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

              {/* Mobile App UI Preview Element */}
              <div className="mt-3 p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200">Featured Mobile Projects</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium">
                    Google Play Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <div className="font-bold text-xs text-sky-400">Sportify</div>
                    <div className="text-[10px] text-slate-400 truncate">Sports & Event Management</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <div className="font-bold text-xs text-teal-400">Edovra</div>
                    <div className="text-[10px] text-slate-400 truncate">Educational Application</div>
                  </div>
                </div>
              </div>

              {/* Floating Floating Stat Badge */}
              <div className="absolute -bottom-4 -left-4 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">CGPA 3.90 / 4.00</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Fully Funded Scholarship</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

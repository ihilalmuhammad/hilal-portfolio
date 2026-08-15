import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Opportunities from './components/Opportunities';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-sky-500 selection:text-white overflow-x-hidden">
      {/* Top Ultra-Thin Scroll Progress Bar */}
      <ScrollProgress />

      {/* Multi-Layered Parallax Background */}
      <AnimatedBackground />

      {/* Interactive Ball-Style Cursor Follower */}
      <CustomCursor />

      {/* Main UI Header & Content */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Opportunities />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

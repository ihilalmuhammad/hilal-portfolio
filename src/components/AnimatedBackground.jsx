import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedBackground() {
  const containerRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Check touch screen, mobile screen, or reduced motion
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobile = window.innerWidth < 1024;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (touchCheck || isMobile || reducedMotion) {
      setIsDisabled(true);
      return;
    }
    setIsDisabled(false);

    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Normalized offsets (-1 to 1)
            const offsetX = (clientX - centerX) / centerX;
            const offsetY = (clientY - centerY) / centerY;

            // Set CSS variables directly on DOM container to prevent React re-renders!
            containerRef.current.style.setProperty('--mouse-x', `${clientX}px`);
            containerRef.current.style.setProperty('--mouse-y', `${clientY}px`);
            containerRef.current.style.setProperty('--parallax-x-1', `${offsetX * -15}px`);
            containerRef.current.style.setProperty('--parallax-y-1', `${offsetY * -15}px`);
            containerRef.current.style.setProperty('--parallax-x-2', `${offsetX * 20}px`);
            containerRef.current.style.setProperty('--parallax-y-2', `${offsetY * 20}px`);
            containerRef.current.style.setProperty('--parallax-x-3', `${offsetX * -8}px`);
            containerRef.current.style.setProperty('--parallax-y-3', `${offsetY * -8}px`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{
        '--mouse-x': '-1000px',
        '--mouse-y': '-1000px',
        '--parallax-x-1': '0px',
        '--parallax-y-1': '0px',
        '--parallax-x-2': '0px',
        '--parallax-y-2': '0px',
        '--parallax-x-3': '0px',
        '--parallax-y-3': '0px',
      }}
    >
      
      {/* LAYER 5: Interactive Pointer Spotlight Radial Glow (Desktop) */}
      {!isDisabled && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full transition-opacity duration-300 opacity-40 dark:opacity-25 blur-3xl pointer-events-none"
          style={{
            left: 'var(--mouse-x)',
            top: 'var(--mouse-y)',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 80%)'
          }}
        />
      )}

      {/* LAYER 1: Very Slow Large Blurred Ambient Orbs (Parallax Layer 1) */}
      <div 
        className="absolute top-[-5%] left-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-sky-400/20 to-blue-600/10 dark:from-sky-500/10 dark:to-blue-600/5 blur-3xl animate-float-slow transition-transform duration-300 ease-out"
        style={{ transform: 'translate3d(var(--parallax-x-1), var(--parallax-y-1), 0)' }}
      />
      <div 
        className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500/15 to-purple-600/10 dark:from-indigo-600/10 dark:to-purple-700/5 blur-3xl animate-float-delayed transition-transform duration-300 ease-out"
        style={{ transform: 'translate3d(var(--parallax-x-2), var(--parallax-y-2), 0)' }}
      />

      {/* LAYER 2: Floating Developer / Mobile SVG Accents (Parallax Layer 2) */}
      <div 
        className="absolute top-[18%] left-[8%] w-16 h-16 border border-sky-400/20 dark:border-sky-500/15 rounded-2xl animate-float-slow transition-transform duration-300 ease-out hidden md:block"
        style={{ transform: 'translate3d(var(--parallax-x-2), var(--parallax-y-2), 0) rotate(12deg)' }}
      />
      <div 
        className="absolute top-[65%] right-[12%] w-24 h-24 border border-indigo-400/20 dark:border-indigo-500/15 rounded-full animate-float-delayed transition-transform duration-300 ease-out hidden md:block"
        style={{ transform: 'translate3d(var(--parallax-x-1), var(--parallax-y-1), 0)' }}
      />

      {/* LAYER 3: Subtle Dot Grid Matrix Texture (Parallax Layer 3) */}
      <div 
        className="absolute inset-0 bg-dot-grid opacity-50 dark:opacity-25 mix-blend-overlay transition-transform duration-300 ease-out"
        style={{ transform: 'translate3d(var(--parallax-x-3), var(--parallax-y-3), 0)' }}
      />

      {/* LAYER 4: Fine Vector Technical Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15 dark:opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="currentColor" strokeDasharray="6 6" className="text-slate-400 dark:text-slate-600" />
        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="currentColor" strokeDasharray="8 8" className="text-slate-400 dark:text-slate-600" />
      </svg>

    </div>
  );
}

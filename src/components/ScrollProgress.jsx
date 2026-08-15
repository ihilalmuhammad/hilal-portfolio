import React, { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (barRef.current) {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
            barRef.current.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-slate-200/20 dark:bg-slate-800/40 pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 origin-left transition-transform duration-75 ease-out shadow-[0_0_8px_rgba(14,165,233,0.8)]"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}

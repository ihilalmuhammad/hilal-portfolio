import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const ballRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  // Position target & current interpolated position for smooth trailing motion
  const mousePos = useRef({ x: -100, y: -100 });
  const ballPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Check touch device, small screen, or reduced motion
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobileWidth = window.innerWidth < 1024;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (touchCheck || isMobileWidth || reducedMotion) {
      setIsDisabled(true);
      return;
    }
    setIsDisabled(false);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, input, textarea, [role="button"], .card-hover-effect, .interactive-hover');
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth lerp (linear interpolation) loop for trailing ball follower
    const render = () => {
      const lerpFactor = 0.18; // smooth trailing speed
      ballPos.current.x += (mousePos.current.x - ballPos.current.x) * lerpFactor;
      ballPos.current.y += (mousePos.current.y - ballPos.current.y) * lerpFactor;

      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${ballPos.current.x}px, ${ballPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };
    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (isDisabled || !isVisible) return null;

  return (
    <div
      ref={ballRef}
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-all duration-300 ease-out ${
        isHovered
          ? 'w-11 h-11 bg-sky-500/20 border-2 border-sky-400 backdrop-blur-[2px] shadow-[0_0_15px_rgba(14,165,233,0.4)]'
          : 'w-4 h-4 bg-sky-500/60 border border-sky-300/80 shadow-[0_0_8px_rgba(14,165,233,0.5)]'
      }`}
      aria-hidden="true"
    />
  );
}

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollRevealProps {
  trigger?: React.RefObject<HTMLElement>;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  animation?: 'fade-up' | 'fade-in' | 'scale-up' | 'clip-reveal';
  delay?: number;
  duration?: number;
  stagger?: number;
  batch?: boolean;
}

export const useScrollReveal = ({
  trigger,
  start = 'top 85%',
  end = 'bottom 20%',
  scrub = false,
  markers = false,
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  stagger = 0,
  batch = false,
}: UseScrollRevealProps = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = elementRef.current;
    const triggerEl = trigger?.current || el;

    if (!el || !triggerEl) return;

    // Initial state
    let initialVars: gsap.TweenVars = {};
    let animateVars: gsap.TweenVars = {};

    switch (animation) {
      case 'fade-up':
        initialVars = { opacity: 0, y: 50 };
        animateVars = { opacity: 1, y: 0 };
        break;
      case 'fade-in':
        initialVars = { opacity: 0 };
        animateVars = { opacity: 1 };
        break;
      case 'scale-up':
        initialVars = { opacity: 0, scale: 0.9 };
        animateVars = { opacity: 1, scale: 1 };
        break;
      case 'clip-reveal':
        initialVars = { clipPath: 'inset(0 0 100% 0)' };
        animateVars = { clipPath: 'inset(0 0 0% 0)' };
        break;
    }

    // Apply initial state immediately to avoid flash
    gsap.set(el, initialVars);

    const ctx = gsap.context(() => {
      if (batch) {
        ScrollTrigger.batch(el, {
          start,
          onEnter: (elements) => {
            gsap.to(elements, {
              ...animateVars,
              duration,
              stagger,
              delay,
              ease: 'power3.out',
              overwrite: true,
            });
          },
          once: true,
        });
      } else {
        gsap.to(el, {
          ...animateVars,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: triggerEl,
            start,
            end,
            scrub,
            markers,
            toggleActions: 'play none none reverse',
          },
        });
      }
    });

    return () => ctx.revert();
  }, [trigger, start, end, scrub, markers, animation, delay, duration, stagger, batch]);

  return elementRef;
};

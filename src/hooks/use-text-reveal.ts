import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextToSpans, splitTextToWords } from '@/lib/animation-utils';

gsap.registerPlugin(ScrollTrigger);

interface UseTextRevealProps {
  text: string;
  type?: 'chars' | 'words';
  trigger?: React.RefObject<HTMLElement>;
  start?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
}

export const useTextReveal = ({
  text,
  type = 'chars',
  trigger,
  start = 'top 85%',
  delay = 0,
  duration = 1,
  stagger = 0.03,
  className = '',
}: UseTextRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Split text
    const { html } = type === 'chars' 
      ? splitTextToSpans(text, className) 
      : splitTextToWords(text, className);
    
    el.innerHTML = html;

    const targets = el.querySelectorAll('span');
    const triggerEl = trigger?.current || el;

    // Initial state
    gsap.set(targets, { opacity: 0, y: 20 });

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: triggerEl,
          start,
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, [text, type, trigger, start, delay, duration, stagger, className]);

  return elementRef;
};

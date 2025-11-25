import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseParallaxProps {
  speed?: number; // Negative for reverse direction
  trigger?: React.RefObject<HTMLElement>;
  start?: string;
  end?: string;
  direction?: 'vertical' | 'horizontal';
}

export const useParallax = ({
  speed = 1,
  trigger,
  start = 'top bottom',
  end = 'bottom top',
  direction = 'vertical',
}: UseParallaxProps = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = elementRef.current;
    const triggerEl = trigger?.current || el;

    if (!el || !triggerEl) return;

    const ctx = gsap.context(() => {
      const y = direction === 'vertical' ? speed * 100 : 0;
      const x = direction === 'horizontal' ? speed * 100 : 0;

      gsap.fromTo(
        el,
        { y: 0, x: 0 },
        {
          y: y,
          x: x,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerEl,
            start,
            end,
            scrub: 0, // Instant scrub for parallax
          },
        }
      );
    });

    return () => ctx.revert();
  }, [speed, trigger, start, end, direction]);

  return elementRef;
};

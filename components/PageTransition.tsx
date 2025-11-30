"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const nodeRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    if (!nodeRef.current) return;
    gsap.set(nodeRef.current, { autoAlpha: 0, scale: 0.98, y: 10 });
    gsap.to(nodeRef.current, {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const onExit = () => {
    if (!nodeRef.current) return;
    gsap.to(nodeRef.current, {
      autoAlpha: 0,
      scale: 0.98,
      y: -10,
      duration: 0.4,
      ease: "power3.in",
    });
  };

  return (
    <SwitchTransition>
      <Transition
        key={pathname}
        nodeRef={nodeRef}
        timeout={600}
        onEnter={onEnter}
        onExit={onExit}
        mountOnEnter
        unmountOnExit
      >
        <div ref={nodeRef} className="page-transition-wrapper w-full">
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  );
};

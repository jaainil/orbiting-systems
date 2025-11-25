import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const nodeRef = useRef<HTMLDivElement>(null);

  const onEnter = (node: HTMLElement) => {
    gsap.set(node, { autoAlpha: 0, scale: 0.98, y: 10 });
    gsap.to(node, {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const onExit = (node: HTMLElement) => {
    gsap.to(node, {
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
        key={location.pathname}
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

# GSAP Animation Overhaul Walkthrough

I have successfully transformed the website into a high-performance, scroll-driven experience using GSAP and Lenis.

## Changes Implemented

### 1. Global Animation Infrastructure
- **Smooth Scrolling**: Implemented `Lenis` via `useSmoothScroll` hook for buttery smooth scroll physics.
- **Animation Hooks**: Created a suite of reusable hooks to standardize animations:
    - `useScrollReveal`: For fading, scaling, and sliding elements into view.
    - `useParallax`: For creating depth with background elements moving at different speeds.
    - `useMagnetic`: For interactive buttons that follow the cursor.
    - `useTextReveal`: For cinematic text animations (splitting words/chars).

### 2. Component Animations
- **Navbar**: Added "Smart Navbar" behavior that hides on scroll down and reveals on scroll up, with glassmorphism effects.
- **Hero**: Implemented a cinematic entrance with staggered text reveals, parallax background blobs, and a magnetic CTA button.
- **DrivingFuture**: Added scroll-triggered image reveals with parallax tilt effects.
- **ServicesGrid**: Implemented staggered card reveals for a cascading effect.
- **SmartSolutions**: Added parallax to the floating images and fade-up reveals for content.
- **Industries**: Enhanced the marquee section with a smooth fade-in entry.
- **ProcessSteps**: Created a custom timeline animation where the line draws itself as you scroll, with steps revealing sequentially.
- **Footer**: Added a smooth reveal animation.

### 3. Performance Optimizations
- **GSAP Context**: Used `gsap.context()` in all hooks to ensure proper cleanup and prevent memory leaks (React Strict Mode compatible).
- **Will-Change**: Animations use transform and opacity for GPU acceleration.
- **Lenis Configuration**: Tuned for optimal performance on modern browsers.

## Verification
- **Smooth Scroll**: The entire page now scrolls with momentum.
- **Scroll Triggers**: Animations fire at the correct scroll positions.
- **Responsiveness**: Animations are designed to work on mobile (though parallax is subtle).

## Next Steps
- You can tweak the `strength` of the magnetic effect or the `speed` of the parallax in the respective component files.
- Add more complex timeline animations to specific pages if needed.

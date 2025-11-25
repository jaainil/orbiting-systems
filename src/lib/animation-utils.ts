import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EASINGS = {
  power1: "power1.out",
  power2: "power2.out",
  power3: "power3.out",
  power4: "power4.out",
  back: "back.out(1.7)",
  elastic: "elastic.out(1, 0.3)",
  expo: "expo.out",
  circ: "circ.out",
  sine: "sine.out",
};

export const DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  verySlow: 1.5,
};

/**
 * Splits text into an array of span elements for animation.
 * Returns an object containing the HTML string and the count.
 * Note: This is a simple implementation. For complex cases, use a library.
 */
export const splitTextToSpans = (text: string, className: string = "") => {
  if (!text) return { html: "", count: 0 };
  
  const chars = text.split("");
  const html = chars
    .map((char, index) => {
      if (char === " ") return `<span class="inline-block w-[0.25em]">&nbsp;</span>`;
      return `<span class="inline-block ${className}" data-index="${index}">${char}</span>`;
    })
    .join("");

  return { html, count: chars.length };
};

/**
 * Splits text into words for animation.
 */
export const splitTextToWords = (text: string, className: string = "") => {
  if (!text) return { html: "", count: 0 };
  
  const words = text.split(" ");
  const html = words
    .map((word, index) => {
      return `<span class="inline-block whitespace-nowrap ${className}" data-index="${index}">${word}</span>`;
    })
    .join(" "); // Join with space to preserve layout

  return { html, count: words.length };
};

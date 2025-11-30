import { useEffect, useRef } from 'react';

export const Comments = () => {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentsRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'jaainil/aexaware.com');
    script.setAttribute('data-repo-id', 'R_kgDOQX9g0A');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOQX9g0M4CzGnU');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '1');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    // Clear any existing children to prevent duplicates if re-rendered
    commentsRef.current.innerHTML = '';
    commentsRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full mt-16 pt-8 border-t border-border">
      <div ref={commentsRef} />
    </div>
  );
};

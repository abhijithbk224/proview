import { useEffect, useRef } from 'react';

export default function AnimatedSections({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll('.fade-section') || [];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

import { useEffect, useRef, useState } from 'react';

// Performance monitoring
export const measurePerformance = (label: string) => {
  const start = performance.now();
  return () => {
    const end = performance.now();
    console.debug(`${label} took ${end - start}ms`);
  };
};

// Resource hints for critical assets
export const addResourceHints = () => {
  const criticalUrls = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  criticalUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Intersection Observer with caching
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) return;

    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [options]);

  useEffect(() => {
    if (elementRef.current && observerRef.current) {
      observerRef.current.observe(elementRef.current);
    }
  }, [elementRef.current]);

  return [elementRef, isVisible];
};
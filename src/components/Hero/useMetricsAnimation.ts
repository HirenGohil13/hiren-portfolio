import { useEffect, useRef } from 'react';

export function useMetricsAnimation(value: string, duration: number = 2000) {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));
    if (isNaN(numericValue)) return;

    let startTime: number | null = null;
    let frameId: number;

    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const current = Math.floor(progress * numericValue);
      element.textContent = value.replace(numericValue.toString(), current.toString());

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [value, duration]);

  return elementRef;
}
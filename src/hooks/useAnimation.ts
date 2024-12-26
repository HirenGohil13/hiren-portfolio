import { useCallback, useEffect, useRef } from 'react';

export function useAnimation(callback: () => void, deps: any[] = []) {
  const frameRef = useRef<number>();

  const animate = useCallback(() => {
    callback();
    frameRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [animate, ...deps]);
}
import { useState, useEffect } from 'react';
import { imageCache } from '@/utils/cache/ImageCache';

export function useImagePreload(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadImage() {
      try {
        const cachedUrl = await imageCache.fetchAndCache(src);
        if (mounted) {
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Error preloading image:', error);
      }
    }

    loadImage();

    return () => {
      mounted = false;
    };
  }, [src]);

  return isLoaded;
}
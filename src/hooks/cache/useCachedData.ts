import { useState, useEffect } from 'react';
import { MemoryCache } from '@/utils/cache/MemoryCache';

const defaultCache = new MemoryCache();

export function useCachedData<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl?: number
) {
  const [state, setState] = useState<{
    data: T | null;
    loading: boolean;
    error: Error | null;
  }>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const cachedData = defaultCache.get(key);
        if (cachedData) {
          if (mounted) {
            setState({ data: cachedData, loading: false, error: null });
          }
          return;
        }

        const freshData = await fetchFn();
        defaultCache.set(key, freshData, ttl);
        
        if (mounted) {
          setState({ data: freshData, loading: false, error: null });
        }
      } catch (err) {
        if (mounted) {
          setState({ data: null, loading: false, error: err as Error });
        }
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, [key, ttl]);

  return state;
}
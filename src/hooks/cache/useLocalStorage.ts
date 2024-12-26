import { useState, useCallback } from 'react';
import { CACHE_DEFAULTS } from '@/utils/cache/constants';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const prefixedKey = CACHE_DEFAULTS.PREFIX + key;

  const readValue = useCallback((): T => {
    try {
      const item = window.localStorage.getItem(prefixedKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${prefixedKey}":`, error);
      return initialValue;
    }
  }, [prefixedKey, initialValue]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(prefixedKey, JSON.stringify(valueToStore));
      } catch (error) {
        console.warn(`Error setting localStorage key "${prefixedKey}":`, error);
      }
    },
    [prefixedKey, storedValue]
  );

  return [storedValue, setValue] as const;
}
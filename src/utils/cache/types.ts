export interface CacheItem<T> {
  value: T;
  timestamp: number;
}

export interface CacheOptions {
  ttl?: number;
  prefix?: string;
}

export interface CacheInterface<T> {
  get(key: string): T | null;
  set(key: string, value: T, ttl?: number): void;
  clear(): void;
}
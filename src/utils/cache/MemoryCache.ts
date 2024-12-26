import { CacheInterface, CacheItem, CacheOptions } from './types';
import { CACHE_DEFAULTS } from './constants';

export class MemoryCache<T> implements CacheInterface<T> {
  private cache: Map<string, CacheItem<T>>;
  private options: Required<CacheOptions>;

  constructor(options: CacheOptions = {}) {
    this.cache = new Map();
    this.options = {
      ttl: options.ttl ?? CACHE_DEFAULTS.TTL,
      prefix: options.prefix ?? CACHE_DEFAULTS.PREFIX,
    };
  }

  private getKey(key: string): string {
    return `${this.options.prefix}${key}`;
  }

  private isExpired(timestamp: number): boolean {
    return Date.now() > timestamp;
  }

  get(key: string): T | null {
    const item = this.cache.get(this.getKey(key));
    if (!item || this.isExpired(item.timestamp)) {
      this.cache.delete(this.getKey(key));
      return null;
    }
    return item.value;
  }

  set(key: string, value: T, ttl: number = this.options.ttl): void {
    this.cache.set(this.getKey(key), {
      value,
      timestamp: Date.now() + ttl,
    });
  }

  clear(): void {
    this.cache.clear();
  }
}
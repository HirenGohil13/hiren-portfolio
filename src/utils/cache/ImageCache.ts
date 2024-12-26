import { CacheInterface } from './types';
import { CACHE_DEFAULTS } from './constants';

export class ImageCache implements CacheInterface<string> {
  private cache: Map<string, string>;
  private prefix: string;

  constructor(prefix: string = CACHE_DEFAULTS.PREFIX) {
    this.cache = new Map();
    this.prefix = prefix;
  }

  async get(url: string): Promise<string | null> {
    return this.cache.get(this.prefix + url) ?? null;
  }

  async set(url: string, blob: Blob): Promise<void> {
    const objectUrl = URL.createObjectURL(blob);
    this.cache.set(this.prefix + url, objectUrl);
  }

  clear(): void {
    this.cache.forEach((objectUrl) => URL.revokeObjectURL(objectUrl));
    this.cache.clear();
  }

  async fetchAndCache(url: string): Promise<string> {
    const cached = await this.get(url);
    if (cached) return cached;

    try {
      const response = await fetch(url);
      const blob = await response.blob();
      await this.set(url, blob);
      return this.get(url) ?? url;
    } catch (error) {
      console.error('Error caching image:', error);
      return url;
    }
  }
}

export const imageCache = new ImageCache();
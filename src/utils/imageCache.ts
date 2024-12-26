// Image caching utility
const imageCache = new Map<string, string>();

export const getCachedImage = async (url: string): Promise<string> => {
  if (imageCache.has(url)) {
    return imageCache.get(url)!;
  }

  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    imageCache.set(url, objectUrl);
    return objectUrl;
  } catch (error) {
    console.error('Error caching image:', error);
    return url;
  }
};

export const preloadAndCacheImages = async (urls: string[]): Promise<void> => {
  await Promise.all(urls.map(getCachedImage));
};
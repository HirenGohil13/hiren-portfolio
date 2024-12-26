import React from 'react';
import { useImagePreload } from '@utils/performance';
import { getOptimizedImageUrl } from '@utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height,
  className,
  priority = false
}) => {
  const optimizedSrc = getOptimizedImageUrl(src, width);
  const isLoaded = useImagePreload(optimizedSrc);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !priority && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={`transition-opacity duration-300 ${
          isLoaded || priority ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};

export default OptimizedImage;
import { useMemo } from 'react';
import { memoize } from '../utils/performance';

interface Particle {
  id: number;
  size: number;
  initialX: number;
  initialY: number;
  speed: number;
}

const createParticle = (id: number): Particle => ({
  id,
  size: Math.random() * 4 + 2,
  initialX: Math.random() * 100,
  initialY: Math.random() * 100,
  speed: Math.random() * 5 + 5,
});

const generateParticles = memoize((count: number): Particle[] =>
  Array.from({ length: count }, (_, i) => createParticle(i))
);

export function useParticles(count: number = 20) {
  return useMemo(() => generateParticles(count), [count]);
}
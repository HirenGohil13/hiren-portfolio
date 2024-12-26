import { ANIMATION_CONFIG } from './constants';

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: ANIMATION_CONFIG.ANIMATION_DURATION.MEDIUM }
  }
};

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: ANIMATION_CONFIG.STAGGER_DELAY }
  }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: ANIMATION_CONFIG.ANIMATION_DURATION.MEDIUM }
  }
};
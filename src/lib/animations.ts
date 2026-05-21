export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -24 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

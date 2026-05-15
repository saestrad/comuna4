import type { Variants } from 'framer-motion'

export const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.2 } },
}

export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.2 } },
}

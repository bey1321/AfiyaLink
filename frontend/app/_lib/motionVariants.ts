import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2, ease: "easeOut", delay: 0.1 },
  },
};

export const imageFromTopVariant: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const imageFromBottomVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const typingContainer = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.1,
    },
  },
};

export const contentVariants: Variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, x: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.3, ease: "easeOut" },
  },
};
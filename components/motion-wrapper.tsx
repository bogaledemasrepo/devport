"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface MotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const FadeIn = ({ children, delay = 0, ...props }: MotionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.7,
      delay: delay,
      ease: [0.21, 0.47, 0.32, 0.98], // Custom "clean" cubic bezier
    }}
    {...props}
  >
    {children}
  </motion.div>
);
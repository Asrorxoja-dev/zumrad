// src/components/AnimatedComponent.js
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';

const AnimatedComponent = ({ children }) => {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;

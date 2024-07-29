import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedComponent = ({ children, isInView }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      initial={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Toast } from './Toast';
import { useToastState, useToastDispatch } from '../context';

export const ToastHolder: React.FC<{}> = () => {
  const { active, isVisible, steps } = useToastState();
  const dispatch = useToastDispatch();
  useEffect(() => {
    let timer: number;
    if (active === steps.length - 1) {
      timer = setTimeout(() => {
        dispatch({ type: `close` });
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [active]);
  return (
    <motion.div
      data-test-toast-holder
      initial={false}
      animate={{
        opacity: isVisible === true ? 1 : 0,
      }}
    >
      <Toast
        image="/t2.png"
        steps={steps}
        active={active}
        close={() => dispatch({ type: `close` })}
      />
    </motion.div>
  );
};

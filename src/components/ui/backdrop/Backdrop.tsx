import React from 'react';
import classes from '@/scss/components/backdrop/backdrop.module.scss';
import { AnimatePresence, motion, Variants } from 'framer-motion';

interface BackdropProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  show: boolean;
}

const transition = {
  duration: 0.1,
  type: 'tween',
  ease: 'easeOut',
};

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
    visibility: 'hidden',
    transition,
  },
  visible: {
    opacity: 1,
    visibility: 'visible',
    transition,
  },
};

const Backdrop: React.FC<BackdropProps> = ({ show, ...props }) => {
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            variants={backdropVariants}
            animate="visible"
            initial="hidden"
            exit="hidden"
            className={classes.root}
            onClick={(e) => props.onClick?.(e)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Backdrop;

import Backdrop from '@/components/ui/backdrop';
import Navbar from '@/layouts/navigation/navbar';
import Sidebar from '@/layouts/navigation/sidebar';
import classes from '@/scss/layouts/navigation.module.scss';
import { motion } from 'framer-motion';
import React from 'react';

const Navigation: React.FC = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <motion.header
        className={classes.root}
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: 'easeOut' },
        }}
      >
        <Backdrop show={isOpen} onClick={() => setIsOpen(false)} />
        <Sidebar {...{ isOpen, setIsOpen }} />
        <Navbar {...{ isOpen, setIsOpen }} />
      </motion.header>
    </>
  );
};

export default Navigation;

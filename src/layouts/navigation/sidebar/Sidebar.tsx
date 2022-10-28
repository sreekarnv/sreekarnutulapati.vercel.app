import Link from '@/components/ui/link';
import Logo from '@/components/ui/logo';
import classes from '@/scss/layouts/sidebar/sidebar.module.scss';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const sidebarVariants: Variants = {
  hidden: {
    x: '-100%',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={classes.root}
          >
            <div className={classes.logo}>
              <Logo />
            </div>
            <Link href="/" text="Home" onClick={() => setIsOpen(false)} />
            <Link href="/work" text="Work" onClick={() => setIsOpen(false)} />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;

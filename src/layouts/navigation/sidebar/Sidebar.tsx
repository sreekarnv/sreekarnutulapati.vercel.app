import React from 'react';
import classes from '@/scss/layouts/sidebar/sidebar.module.scss';
import Logo from '@/components/ui/logo';
import Link from '@/components/ui/link';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <aside className={classes.root}>
          <div className={classes.logo}>
            <Logo />
          </div>
          <Link href="/" text="Home" onClick={() => setIsOpen(false)} />
          <Link href="/work" text="Work" onClick={() => setIsOpen(false)} />
        </aside>
      )}
    </>
  );
};

export default Sidebar;

import Link from '@/components/ui/link';
import Logo from '@/components/ui/logo';
import React from 'react';
import classes from '@/scss/layouts/navbar/navbar.module.scss';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <nav className={classes.root}>
        <Logo />

        <ul className={classes.nav}>
          <Link text="Home" href={'/'} />
          <Link text="My Work" href={'/work'} />
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className={classes.toggler}>
          <span className={classes.togglerIcon} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;

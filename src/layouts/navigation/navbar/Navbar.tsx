import Link from '@/components/ui/link';
import Logo from '@/components/ui/logo';
import classes from '@/scss/layouts/navbar/navbar.module.scss';
import React from 'react';
import { HiMenu } from 'react-icons/hi';

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
          <Link text="Projects" href={'/projects'} />
          <Link text="About" href={'/about'} />
          <Link text="Contact" href={'/contact'} />
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className={classes.toggler}>
          <HiMenu size={20} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;

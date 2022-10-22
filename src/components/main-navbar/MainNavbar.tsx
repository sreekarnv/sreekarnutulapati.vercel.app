import React from 'react';
import classes from '@/scss/components/main-navbar/main-navbar.module.scss';
import MainNavbarLink from './MainNavbarLink';
import MainDrawerMobile from './MainDrawerMobile';
import Backdrop from '@/components/shared/backdrop';
import Logo from '@/components/shared/logo/Logo';

const MainNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className={classes.root}>
        <Logo />

        <ul className={classes.nav}>
          <MainNavbarLink text="Home" href={'/'} />
          <MainNavbarLink text="My Work" href={'/work'} />
        </ul>

        <MainDrawerMobile {...{ isOpen, setIsOpen }} />
        <Backdrop show={isOpen} onClick={() => setIsOpen(false)} />
        <button onClick={() => setIsOpen(!isOpen)} className={classes.toggler}>
          <span className={classes.togglerIcon} />
        </button>
      </nav>
    </>
  );
};

export default MainNavbar;

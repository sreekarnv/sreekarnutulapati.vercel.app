import React from 'react';
import MainNavbarLink from './MainNavbarLink';
import classes from '@/scss/components/main-navbar/main-drawer-mobile.module.scss';
import Logo from '../shared/logo';

interface MainDrawerMobileProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainDrawerMobile: React.FC<MainDrawerMobileProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      {isOpen && (
        <aside className={classes.root}>
          <div className={classes.logo}>
            <Logo />
          </div>
          <MainNavbarLink
            href="/"
            text="Home"
            onClick={() => setIsOpen(false)}
          />
          <MainNavbarLink
            href="/work"
            text="Work"
            onClick={() => setIsOpen(false)}
          />
        </aside>
      )}
    </>
  );
};

export default MainDrawerMobile;

import React from 'react';
import MainNavbarLink from './MainNavbarLink';

interface MainDrawerMobileProps {
  isOpen: boolean;
}

const MainDrawerMobile: React.FC<MainDrawerMobileProps> = ({}) => {
  return (
    <>
      <aside>
        <MainNavbarLink href="/" text="Home" />
        <MainNavbarLink href="/about" text="About" />
        <MainNavbarLink href="/work" text="Work" />
      </aside>
    </>
  );
};

export default MainDrawerMobile;

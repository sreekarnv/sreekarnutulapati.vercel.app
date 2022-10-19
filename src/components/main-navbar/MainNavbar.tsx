import Link from 'next/link';
import React from 'react';
import classes from '@/scss/components/main-navbar/main-navbar.module.scss';
import Image from 'next/image';
import MainNavbarLink from './MainNavbarLink';

const MainNavbar: React.FC = () => {
  return (
    <>
      <nav className={classes.root}>
        <Link href="/">
          <a className={classes.brand}>
            <Image
              className={classes.brandImage}
              src="/logo.webp"
              height={60}
              width={60}
              placeholder="blur"
              blurDataURL={'/logo.webp'}
              alt="Sreekar Nutulapati"
            />
            <div className={classes.brandContent}>
              <span className={classes.brandContentName}>
                Sreekar Nutulapati
              </span>
              <span className={classes.brandContentDesignation}>Developer</span>
            </div>
          </a>
        </Link>

        <ul className={classes.nav}>
          <MainNavbarLink text="Home" href={'/'} />
          <MainNavbarLink text="About Me" href={'/about'} />
          <MainNavbarLink text="My Work" href={'/work'} />
        </ul>
      </nav>
    </>
  );
};

export default MainNavbar;

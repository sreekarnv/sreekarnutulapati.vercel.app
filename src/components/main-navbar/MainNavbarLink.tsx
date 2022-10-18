import Link from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import classes from '@/scss/components/main-navbar/main-navbar-link.module.scss';

interface MainNavbarLinkProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

const MainNavbarLink: React.FC<MainNavbarLinkProps> = ({
  href,
  text,
  icon = <BsArrowUpRight className={classes.icon} />,
}) => {
  return (
    <>
      <li>
        <Link href={href} passHref>
          <a className={classes.root}>
            <span className={classes.text}>{text}</span>
            <span>{icon}</span>
          </a>
        </Link>
      </li>
    </>
  );
};

export default MainNavbarLink;

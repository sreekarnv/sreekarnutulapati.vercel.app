import NLink, { LinkProps as NLinkProps } from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import classes from '@/scss/components/link/link.module.scss';
import { useRouter } from 'next/router';
import clsx from 'clsx';

interface Link extends NLinkProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
  textIcon?: React.ReactNode;
  onClick?: () => void;
  target?: string;
}

const Link: React.FC<Link> = ({
  href,
  text,
  icon = <BsArrowUpRight className={classes.icon} />,
  onClick,
  textIcon,
  ...props
}) => {
  const router = useRouter();

  return (
    <>
      <li onClick={onClick}>
        <NLink
          className={clsx([
            classes.root,
            router.pathname === href && classes.active,
          ])}
          {...props}
          href={href}
          passHref
        >
          <span className={classes.content}>
            <span>{textIcon}</span>
            <p className={classes.text}>{text}</p>
          </span>
          <span>{icon}</span>
        </NLink>
      </li>
    </>
  );
};

export default Link;

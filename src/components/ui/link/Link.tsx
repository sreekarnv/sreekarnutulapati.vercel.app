import NLink from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import classes from '@/scss/components/link/link.module.scss';
import { useRouter } from 'next/router';
import clsx from 'clsx';

interface Link
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
  text: string;
  icon?: React.ReactNode;
  textIcon?: React.ReactNode;
  onClick?: () => void;
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
        <NLink href={href} passHref>
          <a
            className={clsx([
              classes.root,
              router.pathname === href && classes.active,
            ])}
            {...props}
          >
            <span className={classes.content}>
              <span>{textIcon}</span>
              <p className={classes.text}>{text}</p>
            </span>
            <span>{icon}</span>
          </a>
        </NLink>
      </li>
    </>
  );
};

export default Link;

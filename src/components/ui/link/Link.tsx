import NLink from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import classes from '@/scss/components/link/link.module.scss';

interface Link
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Link: React.FC<Link> = ({
  href,
  text,
  icon = <BsArrowUpRight className={classes.icon} />,
  onClick,
  ...props
}) => {
  return (
    <>
      <li onClick={onClick}>
        <NLink href={href} passHref>
          <a className={classes.root} {...props}>
            <span className={classes.text}>{text}</span>
            <span>{icon}</span>
          </a>
        </NLink>
      </li>
    </>
  );
};

export default Link;

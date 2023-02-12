import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import classes from '@/scss/components/logo/logo.module.scss';

const Logo: React.FC = ({}) => {
  return (
    <>
      <Link className={classes.root} href="/">
        <Image
          className={classes.image}
          src="/logo.webp"
          height={60}
          width={60}
          placeholder="blur"
          blurDataURL={'/logo.webp'}
          alt="Sreekar Nutulapati"
        />
        <div className={classes.content}>
          <span className={classes.name}>Sreekar Nutulapati</span>
          <span className={classes.designation}>Developer</span>
        </div>
      </Link>
    </>
  );
};

export default Logo;

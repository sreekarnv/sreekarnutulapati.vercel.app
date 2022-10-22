import React from 'react';
import classes from '@/scss/components/backdrop/backdrop.module.scss';

interface BackdropProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  show: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({ show, ...props }) => {
  return <>{show && <div className={classes.root} {...props} />}</>;
};

export default Backdrop;

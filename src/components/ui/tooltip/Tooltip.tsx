import React from 'react';
import classes from '@/scss/components/tooltip/tooltip.module.scss';

interface TooltipProps {
  children?: React.ReactNode;
  text?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <>
      <button
        className={classes.root}
        aria-describedby="Tooltip"
        role="tooltip"
      >
        <span className={classes.item}>{children}</span>
        <span className={classes.text}>{text}</span>
      </button>
    </>
  );
};

export default Tooltip;

import React from 'react';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import classes from '@/scss/components/accordion/accordion.module.scss';

interface AccordionProps {
  children: React.ReactNode;
  header: React.ReactNode;
  isActive?: boolean;
  onTabClick?: (tabIndex: number) => void;
  tabIndex: number;
}

const Accordion: React.FC<AccordionProps> = ({
  header,
  children,
  isActive,
  tabIndex,
  onTabClick,
}) => {
  return (
    <>
      <div className={classes.root}>
        <button
          className={classes.header}
          onClick={() => onTabClick?.(tabIndex)}
        >
          <span>{header}</span>
          {!isActive ? (
            <BsChevronRight size={40} />
          ) : (
            <BsChevronDown size={40} />
          )}
        </button>
        {isActive && <div className={classes.content}>{children}</div>}
      </div>
    </>
  );
};

export default Accordion;

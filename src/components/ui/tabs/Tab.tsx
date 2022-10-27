import React from 'react';
import classes from '@/scss/components/tabs/tab.module.scss';
import clsx from 'clsx';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <>
      <li>
        <button
          onClick={onClick}
          className={clsx([classes.root, isActive && classes.active])}
        >
          {label}
        </button>
      </li>
    </>
  );
};

export default Tab;

import React from 'react';
import classes from '@/scss/components/tabs/tabs.module.scss';
import clsx from 'clsx';

interface TabsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children, className, ...props }) => {
  return (
    <>
      <ul className={clsx([classes.root, className])} {...props}>
        {children}
      </ul>
    </>
  );
};

export default Tabs;

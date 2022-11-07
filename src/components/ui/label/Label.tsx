import React from 'react';
import classes from '@/scss/components/label/label.module.scss';
import clsx from 'clsx';

interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({ required = true, ...props }) => {
  return (
    <>
      <label className={clsx([classes.root])} {...props}>
        {props.children}
        {required && <span className={classes.required}> *</span>}
      </label>
    </>
  );
};

export default Label;

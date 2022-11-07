import clsx from 'clsx';
import classes from '@/scss/components/input/input.module.scss';
import React from 'react';
import { FieldError } from 'react-hook-form';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  errorMessage?: string | FieldError | undefined;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, className, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={clsx([
            className,
            classes.root,
            errorMessage && classes.error,
          ])}
          {...props}
        />
        {errorMessage && (
          <small className={classes.errorMessage}>
            {errorMessage as string}
          </small>
        )}
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;

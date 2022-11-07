import clsx from 'clsx';
import classes from '@/scss/components/input/input.module.scss';
import React from 'react';
import { FieldError } from 'react-hook-form';

type InputProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  errorMessage?: string | FieldError | undefined;
};

const TextArea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ errorMessage, className, ...props }, ref) => {
    return (
      <>
        <textarea
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

TextArea.displayName = 'TextArea';

export default TextArea;

import React from 'react';
import clsx from 'clsx';
import variants from '@/scss/config/theme.module.scss';
import classes from '@/scss/components/button/button.module.scss';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  hasElevation?: boolean;
  variant?: keyof typeof variants;
}

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const { hasElevation, variant = 'primary' } = props;

    return (
      <button
        className={clsx([
          classes[variant],
          hasElevation && classes.hasElevation,
        ])}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;

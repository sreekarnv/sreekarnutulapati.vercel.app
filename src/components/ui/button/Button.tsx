import React from 'react';
import clsx from 'clsx';
import classes from '@/scss/components/button/button.module.scss';

const variants = {
  primary: classes.primary,
  secondary: classes.secondary,
  'primary-outline': classes.primaryOutline,
  'secondary-outline': classes.secondaryOutline,
};

const sizes = {
  large: classes.large,
  medium: classes.medium,
};

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  hasElevation?: boolean;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const { hasElevation, variant = 'primary', size = 'medium' } = props;

    return (
      <button
        className={clsx([
          variants[variant],
          hasElevation && classes.hasElevation,
          sizes[size],
        ])}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;

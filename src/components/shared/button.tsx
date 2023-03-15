import clsx from 'clsx';
import { Component, JSX, splitProps } from 'solid-js';

import '../../scss/components/shared/button.scss';

const variants = {
	primary: 'btn__primary',
	secondary: 'btn__secondary',
	'primary-outline': 'btn__primary--outline',
	'secondary-outline': 'btn__secondary--outline',
};

const sizes = {
	large: 'btn--large',
	medium: 'btn--medium',
};

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
	isLoading?: boolean;
}

const Button: Component<ButtonProps> = (props) => {
	const [l, rest] = splitProps(props, [
		'variant',
		'size',
		'isLoading',
		'class',
		'children',
	]);
	return (
		<>
			<button
				class={clsx([
					sizes[l.size || 'medium'],
					variants[l.variant || 'primary'],
					l.class,
				])}
				{...rest}>
				{l.children}
			</button>
		</>
	);
};

export default Button;

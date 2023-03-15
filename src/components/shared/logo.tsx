import type { Component } from 'solid-js';

import '../../scss/components/shared/logo.scss';

interface LogoProps {}

const Logo: Component<LogoProps> = ({}) => {
	return (
		<>
			<a class='logo' href='/'>
				<img
					class='logo__image'
					src='/logo.webp'
					height={60}
					width={60}
					alt='Sreekar Nutulapati'
				/>
				<div class='logo__content'>
					<span class='logo__content__name'>Sreekar Nutulapati</span>
					<span class='logo__content__designation'>Developer</span>
				</div>
			</a>
		</>
	);
};

export default Logo;

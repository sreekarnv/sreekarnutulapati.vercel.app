import type { Component, JSX } from 'solid-js';
import '../scss/components/link.scss';

interface LinkProps {
	href: string;
	text: string;
	icon?: JSX.Element;
	textIcon?: JSX.Element;
	onClick?: () => void;
	target?: string;
	isActive?: boolean;
}

const Link: Component<LinkProps> = (props) => {
	return (
		<>
			<li class={['link', props.isActive ? 'link__active' : ''].join(' ')}>
				<a href={props.href}>
					<span class='link__content'>
						<span>{props.textIcon}</span>
						<span class='link__text'>{props.text}</span>
					</span>
					<span>{props.icon}</span>
				</a>
			</li>
		</>
	);
};

export default Link;
import clsx from 'clsx';
import { Component, JSX, Show, splitProps } from 'solid-js';

import '../../scss/components/shared/backdrop.scss';

interface BackdropProps extends JSX.HTMLAttributes<HTMLDivElement> {
	show?: boolean;
}

const Backdrop: Component<BackdropProps> = (props) => {
	const [l, rest] = splitProps(props, ['show', 'class']);

	return (
		<>
			<Show when={l.show}>
				<div class={clsx(['backdrop', l.class])} {...rest} />
			</Show>
		</>
	);
};

export default Backdrop;

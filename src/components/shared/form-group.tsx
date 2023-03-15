import type { Component, JSX } from 'solid-js';
import '../../scss/components/shared/form-group.scss';

const FormGroup: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
	return (
		<>
			<div class='form-group' {...props} />
		</>
	);
};

export default FormGroup;

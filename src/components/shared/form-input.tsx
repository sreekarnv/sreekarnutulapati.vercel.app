import clsx from 'clsx';
import { Component, JSX, Show, splitProps } from 'solid-js';
import '../../scss/components/shared/form-field.scss';

interface FormInputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
	errorMessage?: string;
}

const FormInput: Component<FormInputProps> = (props) => {
	const [l, rest] = splitProps(props, ['class', 'errorMessage']);
	return (
		<>
			<input
				class={clsx([
					'form-field',
					l.errorMessage && 'form-field--error',
					l.class,
				])}
				{...rest}
			/>
			<Show when={l.errorMessage}>
				<small class='form-field__message'>{l.errorMessage}</small>
			</Show>
		</>
	);
};

export default FormInput;

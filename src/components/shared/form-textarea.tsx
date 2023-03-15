import clsx from 'clsx';
import { Component, JSX, Show, splitProps } from 'solid-js';
import '@/scss/components/shared/form-field.scss';

interface FormTextAreaProps
  extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
}

const FormTextArea: Component<FormTextAreaProps> = (props) => {
  const [l, rest] = splitProps(props, ['class', 'errorMessage']);
  return (
    <>
      <textarea
        class={clsx([
          'form-field',
          l.errorMessage && 'form-field--error',
          l.class,
        ])}
        {...rest}
      ></textarea>
      <Show when={l.errorMessage}>
        <small class="form-field__message">{l.errorMessage}</small>
      </Show>
    </>
  );
};

export default FormTextArea;

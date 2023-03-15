import clsx from 'clsx';
import { Component, JSX, Show, splitProps } from 'solid-js';
import '@/scss/components/shared/form-label.scss';

interface FormLabelProps extends JSX.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const FormLabel: Component<FormLabelProps> = (props) => {
  const [l, rest] = splitProps(props, ['class', 'children', 'required']);
  return (
    <>
      <label class={clsx(['form-label', l.class])} {...rest}>
        {l.children}
        <Show when={l.required}>
          <span class="form-label__required"> *</span>
        </Show>
      </label>
    </>
  );
};

export default FormLabel;

import type { Component, JSX } from 'solid-js';
import '@/scss/components/shared/link.scss';

interface LinkProps {
  href: string;
  text: string;
  icon?: JSX.Element | Element;
  textIcon?: JSX.Element | Element;
  onClick?: () => void;
  target?: string;
  isActive?: boolean;
}

const Link: Component<LinkProps> = (props) => {
  return (
    <>
      <li>
        <a
          class={['link', props.isActive ? 'link__active' : ''].join(' ')}
          {...props}
        >
          <span class="link__content">
            <span>{props.textIcon}</span>
            <span class="link__text">{props.text}</span>
          </span>
          <span>{props.icon}</span>
        </a>
      </li>
    </>
  );
};

export default Link;
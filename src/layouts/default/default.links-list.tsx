import { Component, For } from 'solid-js';
import Link from '@/components/shared/link';

interface DefaultLinksListProps {
  ulClass?: string;
  pathname?: string;
  disableTextIcon?: boolean;
}

const links = [
  {
    text: 'Home',
    href: '/',
    textIcon: 'home',
  },
  {
    text: 'About Me',
    href: '/about',
    textIcon: 'info-circle',
  },
  {
    text: 'Work',
    href: '/work',
    textIcon: 'view-grid',
  },
  {
    text: 'Contact',
    href: '/contact',
    textIcon: 'mail',
  },
];

const DefaultLinksList: Component<DefaultLinksListProps> = (props) => {
  return (
    <>
      <ul class={props.ulClass}>
        <For each={links}>
          {(link) => (
            <Link
              icon={'arrow-up-right'}
              isActive={props.pathname === link.href}
              text={link.text}
              href={link.href}
              textIcon={
                props.disableTextIcon ? undefined : (link.textIcon as any)
              }
            />
          )}
        </For>
      </ul>
    </>
  );
};

export default DefaultLinksList;

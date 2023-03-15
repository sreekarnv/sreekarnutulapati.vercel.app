import clsx from 'clsx';
import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import Backdrop from '@/components/shared/backdrop';
import Logo from '@/components/shared/logo';
import Menu from '@/icons/menu';
import DefaultLinksList from '@/layouts/default/default.links-list';

import '@/scss/layouts/default.sidebar.scss';

const DefaultSidebar: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Menu Toggle"
        class="default-toggler"
      >
        <Menu height={24} width={24} />
      </button>

      <Backdrop
        class="default-sidebar__backdrop"
        show={isOpen()}
        onClick={() => setIsOpen(false)}
      />

      <aside
        class={clsx([
          'default-sidebar',
          isOpen() ? 'default-sidebar--show' : 'default-sidebar--hide',
        ])}
      >
        <div class="default-sidebar__logo">
          <Logo />
        </div>

        <DefaultLinksList />
      </aside>
    </>
  );
};

export default DefaultSidebar;

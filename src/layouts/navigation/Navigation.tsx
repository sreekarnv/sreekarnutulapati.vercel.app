import Backdrop from '@/components/ui/backdrop';
import React from 'react';
import Navbar from '@/layouts/navigation/navbar';
import Sidebar from '@/layouts/navigation/sidebar';

const Navigation: React.FC = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header>
        <Backdrop show={isOpen} onClick={() => setIsOpen(false)} />
        <Sidebar {...{ isOpen, setIsOpen }} />
        <Navbar {...{ isOpen, setIsOpen }} />
      </header>
    </>
  );
};

export default Navigation;

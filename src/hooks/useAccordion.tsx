import Accordion from '@/components/ui/accordion';
import React from 'react';

interface useAccordionProps {
  tabs: {
    header: React.ReactNode;
    content: React.ReactNode;
  }[];
  defaultActiveTab?: number;
}

const useAccordion = ({ tabs, defaultActiveTab = -1 }: useAccordionProps) => {
  const [activeTab, setActiveTab] = React.useState(defaultActiveTab);

  const handleTabClick = (index: number) => {
    if (activeTab === index) {
      setActiveTab(-1);
      return;
    }

    setActiveTab(index);
  };

  const accordions = tabs.map((tab, index) => {
    return (
      <Accordion
        tabIndex={index}
        isActive={index === activeTab}
        header={tab.header}
        onTabClick={handleTabClick}
        key={index}
      >
        {tab.content}
      </Accordion>
    );
  });

  return {
    activeTab,
    handleTabClick,
    accordions,
  };
};

export default useAccordion;

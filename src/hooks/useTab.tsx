import React from 'react';

const useTab = (initialValue = 0) => {
  const [activeTab, setActiveTab] = React.useState(initialValue);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return {
    activeTab,
    handleTabChange,
  };
};

export default useTab;

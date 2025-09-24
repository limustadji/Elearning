"use client";

import React, { useState } from "react";

const FilterTabGroup = ({ tabs, defaultTab, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(
    defaultTab || (tabs && tabs.length > 0 ? tabs[0] : "")
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="flex space-x-4 md:space-x-8 border-b border-gray-200">
      {tabs &&
        tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`py-2 px-1 text-base md:text-lg transition-colors duration-200 ease-in-out
            ${
              activeTab === tab
                ? "font-bold text-primary-default border-b-2 border-secondary-default"
                : "font-medium text-gray-500 hover:text-primary-default"
            }
          `}
          >
            {tab}
          </button>
        ))}
    </div>
  );
};

export default FilterTabGroup;

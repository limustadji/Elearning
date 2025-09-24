"use client";

import React, { useState } from "react";
import Image from "next/image";
import ChevronDownIcon from "../icons/ChevronDownIcon";

const AccordionItem = ({ section, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <h3 className="text-lg font-bold text-foreground">{section.title}</h3>
        <ChevronDownIcon
          className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-[max-height,padding] duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen pb-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-3 pl-2">
          {section.lessons.map((lesson, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/icons/icon-play-circle.svg"
                  alt="video icon"
                  width={24}
                  height={24}
                />
                <span className="text-base text-gray-700">{lesson.title}</span>
              </div>
              <span className="text-base text-gray-500">{lesson.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const KurikulumAccordion = ({ curriculumData }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {curriculumData.map((section, index) => (
        <AccordionItem
          key={index}
          section={section}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default KurikulumAccordion;

"use client";
import clsx from "clsx";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import Heading from "../heading";
import Text from "../heading/Text";
import { IoIosArrowDown } from "react-icons/io";

interface IAccordion {
  data: {
    title: string;
    body: React.ReactNode;
    isOpen?: boolean;
    isRichText?: boolean;
  }[];
  wrapperClass?: string;
  styleTitle?: string;
}

const Accordion = ({ data, wrapperClass, styleTitle }: IAccordion) => {
  const [activeIndex, setActiveIndex] = useState(
    data
      ?.map((item, idx) => (item?.isOpen ? idx : null))
      .filter((r) => r !== null) as number[]
  );

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex.includes(index)
        ? prevActiveIndex.filter((i) => i !== index)
        : [...prevActiveIndex, index]
    );
  };

  return data?.map((acc, index) => (
    <AccordionItem
      key={index}
      title={acc.title}
      body={acc.body}
      isRichText={acc.isRichText}
      isActive={activeIndex.includes(index)}
      toggleAccordion={() => toggleAccordion(index)}
      styleTitle={styleTitle}
      className={wrapperClass}
    />
  ));
};

export default Accordion;

interface IAccordionItem {
  title: string;
  body: React.ReactNode;
  isRichText?: boolean;
  isActive: boolean;
  toggleAccordion: () => void;
  styleTitle?: string;
  className?: string;
}

const AccordionItem = ({
  title,
  body,
  isRichText,
  isActive,
  toggleAccordion,
  styleTitle,
  className,
}: IAccordionItem) => {
  return (
    <div className={clsx(className)}>
      <div
        className={clsx(
          "flex cursor-pointer items-center justify-between prevent-select gap-x-2 py-3 px-5"
        )}
        role="button"
        onClick={toggleAccordion}
        onKeyDown={() => {}}
      >
        <Heading className={clsx("md:text-xl", styleTitle)}>{title}</Heading>
        <IoIosArrowDown size={20} className={clsx(isActive && "-rotate-180")} />
      </div>

      {isActive && (
        <div className="overflow-hidden px-5">
          {isRichText ? (
            <p
              className="animate-bottom rce-text"
              dangerouslySetInnerHTML={{ __html: body as string }}
            />
          ) : typeof body === "string" ? (
            <Text variant="secondary" className="animate-bottom">
              {body}
            </Text>
          ) : (
            body
          )}
        </div>
      )}
    </div>
  );
};

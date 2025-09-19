"use client";
import clsx from "clsx";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Heading from "../heading";
import Text from "../heading/Text";

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
    <div className={clsx("px-5 border-b border-b-gray-tertiary", className)}>
      <div
        className={clsx(
          "flex cursor-pointer items-center justify-between prevent-select gap-x-2 py-3"
        )}
        role="button"
        onClick={toggleAccordion}
        onKeyDown={() => {}}
      >
        <Heading className={clsx("md:text-xl", styleTitle)} type="medium">
          {title}
        </Heading>
        <IoIosArrowDown
          size={20}
          className={clsx(
            "transition-transform duration-300 ease-in-out",
            isActive && "-rotate-180"
          )}
        />
      </div>

      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isActive ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pb-4">
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
      </div>
    </div>
  );
};

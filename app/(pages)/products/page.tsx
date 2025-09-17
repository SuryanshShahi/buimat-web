"use client";
import PageWrapper from "@/app/components/pageWrapper/PageWrapper";
import Accordion from "@/app/shared/accordion";
import Button from "@/app/shared/buttons/Button";
import Heading from "@/app/shared/heading";
import Checkbox from "@/app/shared/input/Checkbox";
import InputField from "@/app/shared/input/InputField";
import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Page = () => {
  return (
    <PageWrapper>
      <div className="flex">
        <div className="max-w-[285px] w-full bg-white">
          <Heading type="bold" className="text-lg py-3 pl-5 bg-blue-100">
            Tiles
          </Heading>
          <Accordion
            data={[
              {
                body: (
                  <div className="px-4 space-y-3">
                    {["Wall Tiles", "Wall Tiles"].map((item, idx) => (
                      <Checkbox type="checkbox" label={item} key={idx} />
                    ))}
                  </div>
                ),
                title: "Select Category",
              },
            ]}
            styleTitle="!text-base"
          />
          <Accordion
            data={[
              {
                body: (
                  <div className="px-4 space-y-3">
                    {[
                      "Only verified suppliers",
                      "Supplier with 4.5 up",
                      "Supplier with 4 up",
                      "Supplier with 3 up",
                    ].map((item, idx) => (
                      <Checkbox type="checkbox" label={item} key={idx} />
                    ))}
                  </div>
                ),
                title: "Suppliers",
              },
            ]}
            styleTitle="!text-base"
          />
        </div>
        <div className="w-full"></div>
      </div>
    </PageWrapper>
  );
};

export default Page;

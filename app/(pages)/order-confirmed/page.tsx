"use client";
import PageWrapper from "@/app/components/pageWrapper/PageWrapper";
import Button from "@/app/shared/buttons/Button";
import ProductCardHorizontal from "@/app/shared/cards/ProductCardHorizontal";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import KeyValue from "@/app/shared/KeyValue";
import { SvgTruck } from "@/app/svgs";
import React, { Fragment } from "react";

const Page = () => {
  return (
    <PageWrapper wrapperClass="px-5 max-w-[660px] mx-auto w-full md:my-14 my-8">
      <div className="bg-success-400 h-[140px] rounded-t-xl flex flex-col justify-center items-center">
        <SvgTruck fill="white" height={50} width={50} />
        <Heading type="bold" className="text-2xl" variant="white">
          Order Confirmed
        </Heading>
      </div>
      <div className="sm:p-6 p-4 bg-white rounded-b-xl space-y-4">
        <div className="flex justify-between items-center">
          <Heading className="text-lg" type="bold">
            Order Details
          </Heading>
          <Button
            btnName="Download Invoice"
            variant="secondary"
            size="xs"
            className="sm:!px-6 "
          />
        </div>
        <div className="space-y-4">
          {Array(2)
            .fill(null)
            .map((item, idx) => (
              <Fragment key={idx}>
                <ProductCardHorizontal
                  data={{
                    title:
                      "600X600mm Porcelanto Glossy Glazed Ceramic Tile For Floor Standard White Marble Porcelain Tiles",
                    subtitle: "Quantity : 55",
                    image: "/images/hero1.webp",
                  }}
                />
                {idx !== 1 && <Divider />}
              </Fragment>
            ))}
        </div>
        <div className="space-y-2">
          <Heading className="text-sm" type="bold">
            Price Details
          </Heading>
          {[
            {
              label: "Item Subtotal",
              value: "55 X 130 = ₹7,120.75",
            },
            {
              label: "Shipping Fee",
              value: "₹923",
            },
          ].map((item, idx) => (
            <KeyValue {...item} key={idx} styleValue="!font-normal" />
          ))}
          <Divider />
          <KeyValue
            label="Coupon Discount"
            value="₹670"
            styleValue="!text-success-400 !font-normal"
          />
          <Divider />
          <KeyValue
            label="Subtotal"
            value="₹8,043.75"
            styleLabel="!font-semibold"
          />
        </div>
        <div>
          <Heading className="text-sm mb-2" type="bold">
            Shipping Details
          </Heading>
          <Text className="text-sm" variant="tertiary" type="semibold">
            Abhishek Banarjee
          </Text>
          <Text className="text-sm" variant="tertiary">
            Plot Number-1133/311,1134/416, Satabdi Nagar, Lane-2, Delta ,
            Baramunda Bhubaneswar - 751003, Odisha
          </Text>
          <Text className="text-sm" variant="tertiary" type="semibold">
            Mobile: 9620379947
          </Text>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;

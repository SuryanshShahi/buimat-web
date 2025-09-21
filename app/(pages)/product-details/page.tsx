"use client";
import PageWrapper from "@/app/components/pageWrapper/PageWrapper";
import Img from "@/app/shared/Img";
import Button from "@/app/shared/buttons/Button";
import CounterBtn from "@/app/shared/buttons/CounterBtn";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import ProductCard from "@/app/shared/cards/ProductCard";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import InputField from "@/app/shared/input/InputField";
import SideDrawer from "@/app/shared/modal/SideDrawer";
import { SvgPiggyBank, SvgSecurity, SvgTruck } from "@/app/svgs";
import { products } from "@/app/utils/static";
import { tw } from "@/tailwind.config";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import ProductOverview from "./sections/ProductOverview";

const Page = () => {
  const router = useRouter();

  const protection = [
    {
      label: "Secure payments",
      description:
        "Every payment you make on BUIMAT is secured with strict SSL encryption and PCI DSS data protection protocols",
      icon: (
        <SvgSecurity
          fill={tw.textColor["brand-tertiary"]}
          height={20}
          width={20}
        />
      ),
    },
    {
      label: "Standard refund policy",
      description:
        "Claim a refund if your order doesn't ship, is missing, or arrives with product issues",
      icon: (
        <SvgPiggyBank
          fill={tw.textColor["brand-tertiary"]}
          height={20}
          width={20}
        />
      ),
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <PageWrapper
        wrapperClass="pb-10"
        breadCrumbs={[
          {
            label: "Tiles",
          },
          {
            label: "Floor Tiles",
          },
        ]}
      >
        <div className="sm:px-5 px-4 mt-6 max-w-screen-xl mx-auto space-y-6">
          <div className="flex lg:flex-row flex-col gap-10 lg:items-start justify-between items-center">
            <ProductOverview />
            <div className="max-w-[320px] space-y-8">
              <CardWrapper className="space-y-4 !p-6 shadow-card h-max">
                <div className="space-y-2">
                  <div className="flex items-end gap-x-2">
                    <Heading type="bold" className="text-2xl">
                      ₹92.35
                    </Heading>
                    <Text size="sm" className="mb-[2px]">
                      Per Sq.ft
                    </Text>
                  </div>
                  <Text size="sm" variant="tertiary">
                    Min. Order - 100 sq. feet
                  </Text>
                </div>
                <Divider />
                <div className="space-y-1">
                  <Heading type="bold">Shipping</Heading>
                  <Text size="sm" variant="tertiary">
                    Enter your delivery pin code to check
                  </Text>
                </div>
                <InputField
                  className="w-full !pr-16"
                  icon={
                    <div className="text-tertiary font-semibold text-sm">
                      Check
                    </div>
                  }
                />
                <Divider />
                <div className="space-y-1">
                  <Text size="sm" variant="tertiary">
                    Still deciding? Get samples first!
                  </Text>
                  <Heading className="text-sm underline">Order Sample</Heading>
                </div>
                <Text size="sm" variant="secondary">
                  Maximum order quantity: 1 square foot
                </Text>
                <div className="flex gap-x-2">
                  <Text size="sm" variant="tertiary">
                    Sample price:
                  </Text>
                  <Heading className="text-sm underline">
                    ₹12.15 / sq. ft
                  </Heading>
                </div>
                <Divider />
                <div className="flex gap-x-4">
                  <Button btnName="Send Enquiry" size="sm" fullWidth />
                  <Button
                    btnName="Add to Cart"
                    className="!bg-brand-solid"
                    styleBtnName="text-black"
                    size="sm"
                    fullWidth
                    onClick={() => setIsOpen(true)}
                  />
                </div>
              </CardWrapper>
              <CardWrapper className="space-y-4 shadow-card">
                <Heading type="bold">Protection for this product</Heading>
                {protection.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-x-1">
                        {item.icon}
                        <Heading className="text-sm">{item.label}</Heading>
                      </div>
                      <Text size="sm" variant="tertiary">
                        {item.description}
                      </Text>
                    </div>
                    {idx !== 1 && <Divider />}
                  </Fragment>
                ))}
              </CardWrapper>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto space-y-6">
            <div className="space-y-4">
              <Heading>Frequently bought together</Heading>
              <div className="flex gap-x-3 gap-y-6 overflow-x-scroll">
                {Array(10)
                  .fill(products.recentItems.items?.[0])
                  .map((item, idx) => (
                    <ProductCard
                      data={{ ...item, styleImage: "sm:!h-[200px]" }}
                      key={idx}
                      className="!min-w-[210px]"
                      onClick={() =>
                        router.push(`/product-details?id=${item.title}`)
                      }
                    />
                  ))}
              </div>
            </div>
            <Divider />
            <div className="space-y-4">
              <Heading>Popular products from the supplier</Heading>
              <div className="flex gap-x-3 gap-y-6 overflow-x-scroll">
                {Array(10)
                  .fill(products.recentItems.items?.[0])
                  .map((item, idx) => (
                    <ProductCard
                      data={{ ...item, styleImage: "sm:!h-[200px]" }}
                      key={idx}
                      className="!min-w-[210px]"
                      onClick={() =>
                        router.push(`/product-details?id=${item.title}`)
                      }
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
      <SideDrawer
        header={<Heading>Select Variation & Quantity</Heading>}
        footer={<Button btnName="Add to Cart" size="sm" fullWidth />}
        isOpen={isOpen}
        close={() => setIsOpen(false)}
      >
        <div className="p-4 space-y-6">
          <div className="space-y-3">
            <Text type="semibold">Price as per Quantity</Text>
            <div className="grid grid-cols-3">
              {[
                { label: "₹92.35", value: "100-500 sq. feet" },
                { label: "₹87.15", value: "500-1500 sq. feet" },
                { label: "₹82.00", value: "1500-5000 sq. feet" },
              ].map((item, idx) => (
                <div key={idx}>
                  <Heading className="sm:text-2xl text-xl" type="bold">
                    {item.label}
                  </Heading>
                  <Text variant="tertiary" className="sm:text-sm text-xs">
                    {item.value}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <Divider />
          <div className="flex flex-col items-start gap-y-3">
            <Heading type="semibold">Select Color</Heading>
            <div className="flex gap-x-2">
              {Array(3)
                .fill(null)
                .map((item, idx) => (
                  <Img
                    key={idx}
                    src="/images/hero1.webp"
                    alt="product"
                    height={90}
                    width={90}
                    isLocal
                    className="h-16 w-16 rounded-lg"
                  />
                ))}
            </div>
          </div>
          <Divider />
          <div className="space-y-5">
            {Array(2)
              .fill(null)
              .map((item, idx) => (
                <div className="flex justify-between items-center" key={idx}>
                  <Img
                    src="/images/hero1.webp"
                    alt="product"
                    height={90}
                    width={90}
                    isLocal
                    className="h-16 w-16 rounded-lg"
                  />
                  <div className="space-y-1">
                    <Text size="sm" variant="tertiary">
                      Add Quantity
                    </Text>
                    <CounterBtn add={() => {}} remove={() => {}} value={1} />
                  </div>
                  <div>
                    <Heading>₹87.15</Heading>
                    <Text size="sm" variant="tertiary">
                      per sq. feet
                    </Text>
                  </div>
                </div>
              ))}
          </div>
          <Divider />
          <div className="space-y-1">
            <div className="flex justify-between">
              <Text variant="tertiary" size="sm">
                Item Subtotal
              </Text>
              <Text variant="tertiary" size="sm">
                2 variations 80 items
              </Text>
            </div>
            <div className="flex justify-between">
              <Heading>Subtotal</Heading>
              <Heading>₹7102</Heading>
            </div>
            <Text size="xs" className="text-right !text-red-500">
              *Excluding Shipping Charge
            </Text>
          </div>
          <Button
            btnName="Order Now to avail free shipping"
            className="!bg-success-50 !border-none"
            styleBtnName="!text-success-primary !textsm"
            size="sm"
            icon={<SvgTruck fill={tw.textColor["success-primary"]} />}
            iconFirst
            fullWidth
          />
        </div>
      </SideDrawer>
    </>
  );
};

export default Page;

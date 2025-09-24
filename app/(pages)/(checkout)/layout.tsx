"use client";
import PageWrapper from "@/app/components/pageWrapper/PageWrapper";
import Divider from "@/app/shared/divider";
import ListItem from "@/app/shared/ListItem";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";
import ProtectionCard from "../product-details/sections/ProtectionCard";
import OrderSummary from "./sections/OrderSummary";
import Heading from "@/app/shared/heading";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";
import SelectionControl from "@/app/shared/input/SelectionControl";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <PageWrapper wrapperClass="mb-10 max-w-screen-xl mx-auto">
      <div className="gap-x-4 uppercase text-[10px] py-5 flex items-center justify-center md:max-w-[40%] max-w-[80%] mx-auto">
        {["cart", "address", "payment"].map((item, idx) => (
          <Fragment key={item}>
            <ListItem
              key={item}
              name={item}
              styleText={clsx(
                "!text-xs uppercase !font-bold",
                pathname.includes(item) && "!text-black"
              )}
              onClick={() => router.push(`/${item}`)}
              activeColor="!w-full"
              isSelected={pathname.includes(item)}
            />
            {idx !== 2 && (
              <Divider className="border-dashed !border-gray-700" />
            )}
          </Fragment>
        ))}
      </div>
      <Divider />
      <div className="sm:px-5 px-4 mt-6 space-y-6">
        <div className="flex lg:flex-row flex-col gap-10 lg:items-start justify-between items-center">
         <div className="max-w-[700px] w-full">
         <div className="flex justify-between items-center">
        <Heading className="sm:text-lg flex gap-x-3 items-center" type="bold">
          <FaArrowLeft className="text-lg sm:block hidden" />
          Cart
        </Heading>
        <SelectionControl
          type="checkbox"
          label="Select All Items (2)"
          styleLabel="!text-black !font-medium"
        />
      </div>
          {children}
         </div>
          <div className="max-w-[320px] space-y-8">
            <OrderSummary />
            <ProtectionCard />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

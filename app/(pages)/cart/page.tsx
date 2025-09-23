"use client";
import PageWrapper from "@/app/components/pageWrapper/PageWrapper";
import Divider from "@/app/shared/divider";
import ListItem from "@/app/shared/ListItem";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import ProtectionCard from "../product-details/sections/ProtectionCard";
import CartItems from "./sections/CartItems";
import OrderSummary from "./sections/OrderSummary";

const page = () => {
  const pathname = usePathname();
  return (
    <PageWrapper wrapperClass="mb-10">
      <div className="gap-x-4 uppercase text-[10px] py-5 flex items-center justify-center md:max-w-[40%] max-w-[80%] mx-auto">
        {["cart", "address", "payment"].map((item, idx) => (
          <>
            <ListItem
              key={item}
              name={item}
              styleText={clsx(
                "!text-xs uppercase !font-bold",
                pathname.includes(item) && "!text-black"
              )}
              activeColor="!w-full"
              isSelected={pathname.includes(item)}
            />
            {idx !== 2 && (
              <Divider className="border-dashed !border-gray-700" />
            )}
          </>
        ))}
      </div>
      <Divider />
      <div className="sm:px-5 px-4 mt-6 max-w-screen-xl mx-auto space-y-6">
        <div className="flex lg:flex-row flex-col gap-10 lg:items-start justify-between items-center">
          <CartItems />
          <div className="max-w-[320px] space-y-8">
            <OrderSummary />
            <ProtectionCard />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;

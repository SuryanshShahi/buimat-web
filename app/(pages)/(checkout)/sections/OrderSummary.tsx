import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import KeyValue from "@/app/shared/KeyValue";
import { usePathname, useRouter } from "next/navigation";

const OrderSummary = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <CardWrapper className="gap-y-4 !p-6 shadow-card h-[350px] flex flex-col">
      <Heading>Order Summary (80 Items)</Heading>
      <div className="space-y-2">
        {[
          {
            label: "Item Subtotal",
            value: "₹7,120.75",
          },
          {
            label: "Shipping Fee",
            value: "₹100",
          },
        ].map((item, idx) => (
          <KeyValue {...item} key={idx} />
        ))}
        <Divider />
        <KeyValue
          label="Coupon Discount"
          value="Apply Coupon"
          styleValue="uppercase !text-success-400"
        />
        <Divider />
        <KeyValue
          label="Subtotal"
          value="₹8,043.75"
          styleLabel="!font-semibold"
        />
      </div>
      <Button
        btnName={
          pathname.includes("cart")
            ? "Proceed to Checkout"
            : pathname.includes("address")
            ? "Continue to Payment"
            : "Pay Now"
        }
        className="mt-auto"
        size="sm"
        fullWidth
        onClick={() =>
          router.push(pathname.includes("cart") ? "/address" : "/payment")
        }
      />
    </CardWrapper>
  );
};

export default OrderSummary;

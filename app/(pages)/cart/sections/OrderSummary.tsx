import Button from '@/app/shared/buttons/Button'
import CardWrapper from '@/app/shared/cards/CardWrapper'
import Divider from '@/app/shared/divider'
import Heading from '@/app/shared/heading'
import KeyValue from '@/app/shared/KeyValue'

const OrderSummary = () => {
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
      btnName="Proceed to Checkout"
      className="mt-auto"
      size="sm"
      fullWidth
    />
  </CardWrapper>
  )
}

export default OrderSummary

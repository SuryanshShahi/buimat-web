"use client";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import Chip from "@/app/shared/Chip";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import InputField from "@/app/shared/input/InputField";
import SelectionControl from "@/app/shared/input/SelectionControl";
import useWindowDimensions from "@/app/utils/hooks/useWindowDimension";

const Page = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="space-y-4 w-full">
      <div>
        <Heading className="sm:text-lg" type="bold">
          Payment
        </Heading>
        <Text size="sm" variant="tertiary">
          Card information is guaranteed to be safe.
        </Text>
      </div>
      <CardWrapper className="space-y-4">
        <div className="flex items-center justify-between gap-x-2">
          <Text size="sm" type="bold">
            Credit / Debit Card
          </Text>
          <Img
            src="/images/icons/cards.png"
            alt="card"
            height={40}
            width={170}
            isLocal
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="Card Number"
            placeholder="Enter card number"
            className="w-full"
          />
          <InputField
            label="Name on Card"
            placeholder="Enter name"
            className="w-full"
          />
          <InputField
            label="Valid Through (MM/YY)"
            placeholder="Enter MM/YY"
            className="w-full"
          />
          <InputField label="CVV" placeholder="Enter CVV" className="w-full" />
        </div>
        <Divider />
        <SelectionControl
          type="checkbox"
          label="Remember this card"
          styleLabel="!text-black !font-medium"
        />
      </CardWrapper>
      <CardWrapper className="space-y-4">
        <div className="flex items-center justify-between gap-x-2">
          <Text size="sm" type="bold">
            Suryansh Shahi
          </Text>
          <Chip title="Home" className="!rounded-full" size="xs" />
        </div>
        <Divider />
        <div className="space-y-1">
          {[
            "Plot Number-1133/311,1134/416, Satabdi Nagar, Lane-2, Delta, Baramunda",
            "Satabdi Nagar, Delta",
            "Bhubaneswar - 751003",
            "Odisha",
          ].map((item, idx) => (
            <Text size="sm" variant="tertiary" key={idx}>
              {item}
            </Text>
          ))}
          <Text size="sm" variant="black" type="bold">
            Mobile: 9620379947
          </Text>
        </div>
      </CardWrapper>
    </div>
  );
};

export default Page;

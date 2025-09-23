"use client";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import Chip from "@/app/shared/Chip";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import InputField from "@/app/shared/input/InputField";
import { FaArrowLeft } from "react-icons/fa6";
import useHook from "./useHook";
import Button from "@/app/shared/buttons/Button";

const Page = () => {
  const { values, handleChange, setFieldValue } = useHook();
  const inputs = [
    {
      label: "First Name",
      placeholder: "Enter first name",
      value: "firstName",
    },
    {
      label: "Last Name",
      placeholder: "Enter last name",
      value: "lastName",
    },
    {
      label: "Phone No.",
      placeholder: "Enter phone number",
      value: "phone",
    },
    {
      label: "Alternate Phone No (Optional)",
      placeholder: "Enter alternate phone number",
      value: "alternatePhone",
    },
    {
      label: "Pin Code",
      placeholder: "Enter pin code",
      value: "pinCode",
    },
    {
      label: "Locality",
      placeholder: "Enter locality",
      value: "locality",
    },
    {
      label: "City / District / Town",
      placeholder: "Enter city / district / town",
      value: "city",
    },
    {
      label: "State",
      placeholder: "Enter state",
      value: "state",
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto gap-y-4 w-full flex flex-col lg:items-start items-center">
      <div className="lg:-ml-7 mr-auto">
        <Heading className="sm:text-lg flex gap-x-3 items-center" type="bold">
          <FaArrowLeft className="text-lg sm:block hidden" />
          Address
        </Heading>
        <Text size="sm" variant="tertiary" className="lg:ml-7">
          Your personal information is encrypted and will only be used for
          delivery purposes.
        </Text>
      </div>
      <CardWrapper className="max-w-[712px] space-y-4 w-full lg:mx-0 mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {inputs.map((item, idx) => (
            <InputField
              key={idx}
              {...item}
              value={values?.[item.value as keyof typeof values] || ""}
              onChange={(e) => setFieldValue(item.value, e.target.value)}
              className="w-full"
            />
          ))}
        </div>
        <div className="space-y-1 w-full col-span-2">
          <label className="text-secondary text-sm">Full Address</label>
          <textarea
            className="rounded-md border bg-gray-100 border-gray-100 p-3 outline-none w-full"
            rows={5}
            onChange={(e) => setFieldValue("fullAddress", e.target.value)}
          ></textarea>
        </div>
        <InputField
          label="Landmark (Optional)"
          placeholder="Enter landmark"
          value={values.landmark}
          onChange={(e) => setFieldValue("landmark", e.target.value)}
          className="w-full col-span-2"
        />
        <Divider />
        <div className="flex flex-wrap sm:items-center gap-x-4 gap-y-3">
          {["home", "factory", "warehouse", "business"].map((item) => (
            <Chip
              title={item}
              key={item}
              variant={item === values.type ? "warning" : "white"}
              onClick={() => setFieldValue("type", item)}
              className="rounded-full capitalize duration-300"
            />
          ))}
        </div>
        <div className="flex gap-x-4">
          <Button btnName="Save" size="sm" className="!px-6" />
          <Button
            btnName="Cancel"
            variant="secondary"
            size="sm"
            className="!px-6"
          />
        </div>
      </CardWrapper>
    </div>
  );
};

export default Page;

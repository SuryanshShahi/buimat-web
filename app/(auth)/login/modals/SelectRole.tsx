import Button from "@/app/shared/buttons/Button";
import Divider from "@/app/shared/divider";
import Text from "@/app/shared/heading/Text";
import { ModalTemplate } from "@/app/shared/modal/ModalTemplate";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";

const SelectRole = ({
  isOpen,
  value,
  setValue,
}: {
  isOpen: boolean;
  value: string;
  setValue: (value: string) => void;
}) => {
  const router = useRouter();
  return (
    <ModalTemplate
      modalProps={{
        isOpen,
      }}
      headerProps={{
        children: "You are a",
        className: "text-2xl text-center mb-4",
        type: "bold",
      }}
      className="flex flex-col items-center justify-center gap-y-4 max-w-[450px] mx-auto"
    >
      {[
        "Builder / Contractor / Company who need materials in bulk amount",
        "DIYer / Individual who need materials in small amount for personal use",
      ].map((item, idx) => (
        <Fragment key={idx}> 
          <Text
            className="flex items-start gap-x-2 cursor-pointer"
            onClick={() => setValue(item)}
          >
            <input
              type="radio"
              className="scale-125 mt-2"
              checked={item === value}
            />
            {item}
          </Text>
          {idx !== 1 && <Divider />}
        </Fragment>
      ))}

      <Button
        btnName="Continue"
        className="w-[40%] mt-6"
        disabled={!value}
        onClick={() => router.replace("/enter-details")}
      />
    </ModalTemplate>
  );
};

export default SelectRole;

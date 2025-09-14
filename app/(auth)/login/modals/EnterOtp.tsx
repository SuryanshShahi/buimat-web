import Button from "@/app/shared/buttons/Button";
import Text from "@/app/shared/heading/Text";
import OtpInputField from "@/app/shared/input/OtpInput";
import { ModalTemplate } from "@/app/shared/modal/ModalTemplate";
import React from "react";

const EnterOtp = ({
  isOpen,
  otp,
  setOtp,
  onSubmit,
  close
}: {
  isOpen: boolean;
  otp: string;
  setOtp: (otp: string) => void;
  onSubmit: () => void;
  close: () => void;
}) => {
  return (
    <ModalTemplate
      modalProps={{
        isOpen,
        close,
      }}
      headerProps={{
        children: "Enter Otp",
        className: "text-2xl text-center",
        type: "bold",
      }}
      className="flex flex-col items-center gap-y-6"
    >
      <Text size="sm" variant="secondary">
        Please enter the OTP sent to your mobile no
      </Text>
      <div className="max-w-[250px] space-y-4">
        <OtpInputField otp={otp} setOtp={(e) => setOtp(e)} numInputs={4} />
        <Button
          btnName="Verify"
          fullWidth
          disabled={otp.length !== 4}
          onClick={onSubmit}
        />
      </div>
      <Text size="sm" variant="secondary">
        Didn’t receive OTP sent to{" "}
        <span className="text-black">9673294799</span> ?
      </Text>
      <Button
        btnName="Change Mobile no"
        className="!p-0"
        variant="tertiary-color-link"
        onClick={close}
      />
    </ModalTemplate>
  );
};

export default EnterOtp;

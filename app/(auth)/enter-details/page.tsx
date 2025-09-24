"use client";
import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import InputField from "@/app/shared/input/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EnterDetails = () => {
  const [details, setDetails] = useState({
    phone: "",
    email: "",
    name: "",
    gstIn: "",
    type: "",
  });
  const router = useRouter();
  return (
    <div className="bg-gray-50 h-screen px-5 sm:overflow-hidden sm:block flex flex-col sm:justify-center items-center">
      <div className="flex items-center gap-x-2 p-6" onClick={() => {}}>
        <Img
          alt="logo"
          src="/images/icons/logo.png"
          isLocal
          height={30}
          width={30}
          priority
        />
        <Heading className="text-2xl">BUIMAT</Heading>
      </div>
      <div className="h-[calc(100vh-120px)] flex justify-center sm:items-center sm:mt-0 mt-7">
        <div>
          <CardWrapper className="space-y-10 sm:!px-8 !px-6 !pt-8 !pb-10. shadow-card !rounded-b-lg bg-white max-w-[960px] mx-auto">
            <Heading className="sm:text-lg text-center">
              Please share the below information to complete registration
            </Heading>
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="Mobile No."
                placeholder="Enter phone number"
                value={details.phone}
                onChange={(e) =>
                  setDetails({ ...details, phone: e.target.value })
                }
                className="w-full"
              />
              <InputField
                label="Email ID"
                placeholder="Enter email"
                value={details.email}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                className="w-full"
              />
              <InputField
                label="Full Name"
                placeholder="Enter name"
                value={details.name}
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                className="w-full"
              />
              <InputField
                label="GSTIN"
                placeholder="Enter GSTIN"
                value={details.gstIn}
                onChange={(e) =>
                  setDetails({ ...details, gstIn: e.target.value })
                }
                className="w-full"
              />

              <div className="sm:space-y-1 space-y-2">
                <label className="text-secondary text-sm">
                  Type of business
                </label>
                <div className="flex sm:flex-row flex-col sm:items-center gap-x-10 gap-y-3">
                  {["Proprietor", "Partnership", "Company"].map((item) => (
                    <Text
                      key={item}
                      className="flex items-start gap-x-2 cursor-pointer sm:text-base text-sm"
                      onClick={() => setDetails({ ...details, type: item })}
                    >
                      <input
                        type="radio"
                        className="scale-125 sm:mt-[6px] mt-1"
                        checked={item === details.type}
                      />
                      {item}
                    </Text>
                  ))}
                </div>
              </div>
            </div>
            <Button
              btnName="Continue"
              className="sm:w-[40%] mx-auto !w-full"
              disabled={Object.values(details).some((r) => r.length === 0)}
              onClick={() => router.replace("/")}
            />
          </CardWrapper>
          <div className="h-2 bg-brand-solid rounded-b-full -mt-2" />
        </div>
      </div>
    </div>
  );
};

export default EnterDetails;

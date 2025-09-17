"use client";
import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import Divider from "@/app/shared/divider";
import DividerWithText from "@/app/shared/divider/DividerWithText";
import Heading from "@/app/shared/heading";
import TextWithLinks from "@/app/shared/heading/TextWithLinks";
import Img from "@/app/shared/Img";
import { ModalTemplate } from "@/app/shared/modal/ModalTemplate";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import EnterOtp from "./modals/EnterOtp";
import SelectRole from "./modals/SelectRole";

const Login = () => {
  const icons = [
    {
      image: "/images/auth/user1.png",
      className: "top-[4%] left-0",
      height: 30,
      width: 30,
    },
    {
      image: "/images/auth/user2.png",
      className: "top-16 -right-10",
      height: 60,
      width: 60,
    },
    {
      image: "/images/auth/user3.png",
      className: "top-[50%] left-0",
      height: 60,
      width: 60,
    },
    {
      image: "/images/auth/user4.png",
      className: "top-[45%] left-1/2",
      height: 60,
      width: 60,
    },
    {
      image: "/images/auth/user5.png",
      className: "top-[30%] -right-28",
      height: 100,
      width: 100,
    },
    {
      image: "/images/auth/user6.png",
      className: "top-[70%] left-[15%]",
      height: 100,
      width: 100,
    },
    {
      image: "/images/auth/user7.png",
      className: "top-[85%] left-[50%]",
      height: 30,
      width: 30,
    },
    {
      image: "/images/auth/user8.png",
      className: "top-[65%] left-[70%]",
      height: 60,
      width: 60,
    },
    {
      image: "/images/auth/user9.png",
      className: "top-[75%] -right-[30%]",
      height: 60,
      width: 60,
    },
  ];
  const [isOpen, setIsOpen] = useState("");
  const [details, setDetails] = useState({
    phone: "",
    isChecked: false,
    otp: "",
    selectedRole: "",
  });
  useEffect(() => {
    if (isOpen === "OTP_VERIFIED") {
      setTimeout(() => {
        setIsOpen("SELECT_ROLE");
      }, 2000);
    }
  }, [isOpen]);
  return (
    <>
      <div className="bg-gray-50 h-screen px-5 overflow-hidden sm:block flex flex-col justify-center">
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
        <div className="relative max-w-screen-xl mx-auto h-[calc(100vh-80px)] flex flex-col sm:justify-center sm:mt-0 mt-16">
          <div className="max-w-[480px] relative pt-[10%] h-full sm:opacity-100 opacity-0">
            <Heading
              className="sm:text-[64px] text-[32px] sm:leading-[64px] leading-[48px] z-10 sm:text-start text-center"
              type="bold"
            >
              Bridging India&apos;s Construction Needs.
            </Heading>
            {icons.map((item, idx) => (
              <Img
                key={idx}
                src={item?.image}
                alt="user1"
                height={item?.height}
                width={item?.width}
                isLocal
                className={clsx("absolute animate-pulse", item.className)}
              />
            ))}
          </div>
          <div className="sm:max-w-[450px] absolute sm:right-0 w-full sm:mt-0 -mt-10">
            <CardWrapper className="space-y-4 !px-8 !pt-8 !pb-10 shadow-card !rounded-b-lg bg-white">
              <Heading className="text-2xl text-center mb-10" type="bold">
                Register
              </Heading>
              <div className="flex flex-col gap-y-1">
                <label className="text-secondary text-sm">Mobile No.</label>
                <input
                  placeholder="Enter phone number"
                  value={details.phone}
                  type="tel"
                  onChange={(e) =>
                    setDetails({ ...details, phone: e.target.value })
                  }
                  className="h-11 rounded border border-gray-100 p-3"
                />
              </div>
              <Button
                btnName="Send OTP"
                fullWidth
                disabled={Boolean(!details?.phone || !details.isChecked)}
                onClick={() => setIsOpen("ENTER_OTP")}
              />
              <DividerWithText text="OR" />
              <div className="space-y-4">
                <Heading type="bold" className="text-center">
                  Continue with
                </Heading>
                <div className="flex justify-center gap-x-4">
                  <div className="border h-[60px] w-[60px] flex justify-center items-center rounded-lg">
                    <FcGoogle size={30} className="" />
                  </div>
                  <div className="border h-[60px] w-[60px] flex justify-center items-center rounded-lg">
                    <FaFacebook size={28} className="text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="flex gap-x-2 !mt-10">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt[2px] cursor-pointer"
                  onChange={(e) =>
                    setDetails({ ...details, isChecked: !details.isChecked })
                  }
                />
                <TextWithLinks
                  className="text-xs"
                  textProps={{
                    variant: "secondary",
                    size: "xs",
                  }}
                  text="By registering you agree to buimat’s"
                  links={[
                    {
                      label: "Terms & Conditions",
                      link: "",
                      className: "",
                    },
                  ]}
                />
              </div>
            </CardWrapper>
            <div className="h-2 bg-brand-solid rounded-b-full -mt-2" />

            <div className="group w-max mx-auto mt-6">
              <TextWithLinks
                links={[{ label: "Log In", link: "/login" }]}
                text="Already have an account?"
                textProps={{
                  variant: "secondary",
                }}
              />
              <Divider
                variant="brand"
                className="!border-brand !border-[1.5px] rounded-full group-hover:!w-full !w-[40%] duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <EnterOtp
        close={() => setIsOpen("")}
        otp={details?.otp}
        setOtp={(otp) => setDetails({ ...details, otp })}
        isOpen={isOpen === "ENTER_OTP"}
        onSubmit={() => setIsOpen("OTP_VERIFIED")}
      />
      <ModalTemplate
        modalProps={{
          isOpen: isOpen === "OTP_VERIFIED",
        }}
        className="flex flex-col items-center justify-center gap-y-6 h-[300px]"
      >
        <FaCircleCheck size={100} className="text-success-primary" />
        <Heading className="text-2xl">OTP Verification successful</Heading>
      </ModalTemplate>
      <SelectRole
        value={details.selectedRole}
        isOpen={isOpen === "SELECT_ROLE"}
        setValue={(val) => setDetails({ ...details, selectedRole: val })}
      />
    </>
  );
};

export default Login;

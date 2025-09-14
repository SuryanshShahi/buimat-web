"use client";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import Img from "@/app/shared/Img";
import ConfirmationModal from "@/app/shared/modal/ConfirmationModal";
import { SvgCross } from "@/app/svgs";
import useWindowDimensions from "@/app/utils/hooks/useWindowDimension";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const SideBar = ({
  className,
  close,
}: {
  className?: string;
  close?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState("");
  const { width } = useWindowDimensions();

  return (
    <>
      <CardWrapper
        className={clsx(
          "md:py-6 py-4 px-0 space-y-4 w-full max-w-[312px] my-auto lg:h-[calc(100vh-64px)] md:h[calc(100vh-32px)] h-full flex flex-col",
          className
        )}
      >
        <div className="flex justify-between items-center px-6">
          <Link href="/home" className="flex items-center gap-x-2">
            <Img
              height={32}
              width={47}
              alt=""
              src={""}
              className="max-h-8"
              isLocal
            />
            <Heading
              type="semibold"
              className="text-xl line-clamp-1"
              variant="primary"
            >
              Buimat
            </Heading>
          </Link>
          {Number(width) <= 1024 && (
            <SvgCross
              height={26}
              width={26}
              onClick={close}
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              stroke="black"
              className="cursor-pointer"
            />
          )}
        </div>
        <Divider />
      </CardWrapper>
      <ConfirmationModal
        title="Confirm Logout"
        description="Are you sure you want to log out?"
        onSubmit={() => {}}
        styleHeader="flex gap-x-4 !space-y-0"
        rightBtnName="Yes, Logout"
        leftBtnName="Back"
        type="danger"
        isOpen={isOpen === "LOGOUT_MODAL"}
        size="md"
        isLoading={isOpen === "LOADING"}
        close={() => setIsOpen("")}
      />
    </>
  );
};

export default SideBar;

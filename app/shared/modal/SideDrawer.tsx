import { SvgCross } from "@/app/svgs";
import { tw } from "@/tailwind.config";
import { FC, PropsWithChildren, ReactNode } from "react";
import { Modal } from ".";
import Divider from "../divider";

const SideDrawer: FC<
  PropsWithChildren<{
    isOpen: boolean;
    close: () => void;
    footer?: ReactNode;
    header: ReactNode;
  }>
> = ({ isOpen, close, children, header, footer }) => {
  return (
    <Modal
      isOpen={isOpen}
      close={close}
      wrapperClass="!p-0 !justify-end animate-slideLeft max-w-[540px] ml-auto"
      className="bg-white !h-screen !max-h-none right-0 !my-0 !rounded-none"
      disableAnimation
    >
      <div className="flex justify-between items-center p-4 shadow-bottom">
        {header}
        <SvgCross
          height={20}
          width={20}
          stroke={tw.textColor["tertiary"]}
          className="cursor-pointer"
          onClick={close}
        />
      </div>
      <Divider variant="secondary" />
      <div className="overflow-y-scroll h-[calc(100%-128px)]">
        {children}
      </div>
      <div className="flex gap-x-3 p-4 border-t border-t-secondary">
        {footer}
      </div>
    </Modal>
  );
};

export default SideDrawer;

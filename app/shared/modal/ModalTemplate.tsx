import Button from "@/app/shared/buttons/Button";
import { IModal, Modal } from "@/app/shared/modal";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import Heading, { HeadingProps } from "../heading";

interface IModalTemplate {
  className?: string;
  btnProps?: {
    leftBtnName?: string;
    rightBtnName?: string;
    btnWrapperClass?: string;
    isRightBtnLoading?: boolean;
    isLeftBtnLoading?: boolean;
    leftOnClick?: () => void;
    rightOnClick?: () => void;
    disabled?: boolean;
  } | null;
  modalProps: IModal;
  headerProps?: HeadingProps;
}

export const ModalTemplate: FC<PropsWithChildren<IModalTemplate>> = ({
  children,
  className,
  btnProps,
  modalProps,
  headerProps,
}) => {
  return (
    <Modal {...modalProps}>
      <div className={clsx("overflow-y-scroll p-5", className)}>
        {headerProps && <Heading {...headerProps} />}
        {children}
      </div>
      {btnProps && (
        <div
          className={clsx(
            "flex p-6 shadow-top w-full gap-x-3 mt-auto",
            btnProps.btnWrapperClass
          )}
        >
          {btnProps?.leftBtnName && (
            <Button
              btnName={btnProps?.leftBtnName}
              variant="secondary"
              fullWidth
              onClick={btnProps?.leftOnClick || modalProps?.close}
              isLoading={btnProps?.isLeftBtnLoading}
            />
          )}
          {btnProps?.rightBtnName && (
            <Button
              btnName={btnProps?.rightBtnName}
              fullWidth
              onClick={btnProps?.rightOnClick}
              disabled={btnProps?.disabled}
              isLoading={btnProps?.isRightBtnLoading}
            />
          )}
        </div>
      )}
    </Modal>
  );
};

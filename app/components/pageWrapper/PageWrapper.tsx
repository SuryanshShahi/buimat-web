"use client";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IPageWraps {
  wrapperClass?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const PageWrapper: FC<PropsWithChildren<IPageWraps>> = ({
  children,
  wrapperClass,
  hideHeader,
  hideFooter,
}) => {
  return (
    <main className="h-full">
      {!hideHeader && <Header />}
      <ToastContainer stacked />
      <div className={clsx(wrapperClass)}>{children}</div>
      {!hideFooter && <Footer />}
    </main>
  );
};

export default PageWrapper;

"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import BreadCrumbs, { IBreadCrumbs } from "@/app/shared/BreadCrumbs";
import Divider from "@/app/shared/divider";
import clsx from "clsx";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IPageWraps {
  wrapperClass?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
  breadCrumbs?: IBreadCrumbs[];
}

const PageWrapper: FC<PropsWithChildren<IPageWraps>> = ({
  children,
  wrapperClass,
  hideHeader,
  hideFooter,
  breadCrumbs,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const slideNav = () => {
      if (window.scrollY >= 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", slideNav);

    return () => {
      window.removeEventListener("scroll", slideNav);
    };
  }, []);
  return (
    <main className="h-full bg-gray-100">
      {!hideHeader && <Navbar />}

      <ToastContainer stacked />
      <div className={clsx("animate-bottom", wrapperClass)}>
        {breadCrumbs && (
          <>
            <BreadCrumbs
              breadCrumbs={breadCrumbs}
              className="max-w-screen-xl mx-auto px-5"
            />
            <Divider />
          </>
        )}
        {children}
      </div>
      {isActive && (
        <div
          className="z-10 w-12 h-8 hover:h-10 duration-300 bottom-0 right-10 rounded-t-md fixed cursor-pointer bg-[#22303E] flex items-center justify-center"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scroll(0, 0);
            }
          }}
        >
          <IoIosArrowUp color="white" />
        </div>
      )}
      {!hideFooter && <Footer />}
    </main>
  );
};

export default PageWrapper;

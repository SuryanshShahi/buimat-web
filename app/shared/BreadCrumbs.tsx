"use client";
import Button from "@/app/shared/buttons/Button";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiHome3Line } from "react-icons/ri";
import { extractText } from "../utils/constants";
export interface IBreadCrumbs {
  label: string;
  path?: string;
}
const BreadCrumbs = ({
  breadCrumbs,
  className,
}: {
  breadCrumbs?: IBreadCrumbs[];
  className?: string;
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const data: IBreadCrumbs[] = breadCrumbs?.length
    ? breadCrumbs
    : [pathName?.split("/")?.[1]].map((e) => ({
        label: extractText(e),
      }));
  return (
    <div
      className={clsx(
        "lg:flex hidden items-center gap-x-2 py-5 sticky top-0",
        className
      )}
    >
      <RiHome3Line
        className="cursor-pointer"
        onClick={() => router.push("/home")}
      />

      {data?.map((item, idx) => (
        <Fragment key={item?.label + idx}>
          <IoIosArrowForward className="text-gray-300" />
          <Button
            btnName={item?.label}
            size="sm"
            className={clsx(
              "capitalize !px-1 !py-0",
              data?.[data?.length - 1]?.label === item?.label
                ? "text-gray-700"
                : "!font-medium"
            )}
            variant="tertiary-link"
            onClick={
              item?.path ? () => router.push(item?.path ?? "") : () => {}
            }
          />
        </Fragment>
      ))}
    </div>
  );
};

export default BreadCrumbs;

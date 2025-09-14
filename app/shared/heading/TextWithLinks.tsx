import React, { Fragment, ReactNode } from "react";
import Text from "./Text";
import Link from "next/link";
import clsx from "clsx";

const TextWithLinks = ({
  links,
  text,
  className,
}: {
  links: {
    label?: string;
    link?: string;
    body?: ReactNode;
    target?: string;
  }[];
  text: string;
  className?: string;
}) => {
  return (
    <div className={clsx("flex flex-wrap text-black w-max", className)}>
      <Text type="medium" className="text-nowrap">
        {text}
      </Text>
      &nbsp;
      {links?.map((item, idx) => (
        <Fragment key={item?.link}>
          {item?.body ? (
            item?.body
          ) : (
            <Link
              target={item?.target}
              href={item?.link || "#"}
              className="text-black font-bold"
            >
              {item?.label}
            </Link>
          )}
          {idx === links.length - 2 && <span className="px-1">&</span>}
        </Fragment>
      ))}
    </div>
  );
};

export default TextWithLinks;

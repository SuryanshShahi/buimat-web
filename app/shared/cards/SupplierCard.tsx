import clsx from "clsx";
import { Fragment, ReactNode } from "react";
import { LuBookmark } from "react-icons/lu";
import Button from "../buttons/Button";
import HeadingWithBtn from "../heading/HeadingWithBtn";
import Text from "../heading/Text";
import Img from "../Img";
import CardWrapper from "./CardWrapper";

const SupplierCard = ({
  data,
  className,
  onClick,
}: {
  data: {
    title: string;
    stats: { label: string; icon: ReactNode }[];
    certification: string;
    duration: string;
    minOrder: string;
    image: string;
  };
  className?: string;
  onClick: () => void;
}) => {
  return (
    <CardWrapper
      className={clsx("flex md:flex-row flex-col gap-4 group", className)}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-lg relative min-w-[210px] md:max-w-[210px]">
        <Img
          src={data.image}
          alt={data.title}
          height={210}
          width={210}
          isLocal
          className="object-cover h-full w-full group-hover:scale-110 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-black/15 h-full w-full" />
      </div>
      <div className="space-y-4 w-full">
        <HeadingWithBtn
          headingProps={{
            children: data.title,
            className: "!text-base",
          }}
          btnVariant="button"
          className="md:!items-start gap-x-4"
          btnProps={{
            icon: <LuBookmark size={20} />,
            variant: "tertiary-color",
            size: "xs",
            className: "-mt-1 -mr-1",
          }}
        />

        <div className="flex items-center gap-x-4">
          {data.stats.map((item, idx) => (
            <Fragment key={idx}>
              <div className="flex gap-x-1">
                {item.icon}
                <Text size="sm">{item.label}</Text>
              </div>
              {idx !== data.stats.length - 1 && (
                <div className="h-5 w-[1px] bg-black" />
              )}
            </Fragment>
          ))}
        </div>
        <Text size="sm">{data.certification}</Text>
        <Text size="sm">{data.duration}</Text>
        <Text size="sm" variant="tertiary">
          Min. Order - {data.minOrder}
        </Text>
        <div className="flex flex-wrap sm:justify-start justify-center gap-4">
          <Button btnName="Send Enquiry" size="sm" />
          <Button
            btnName="Contact Supplier"
            className="!bg-brand-solid"
            styleBtnName="text-black"
            size="sm"
          />
          <Button btnName="Add to Compare" size="sm" />
        </div>
      </div>
    </CardWrapper>
  );
};

export default SupplierCard;

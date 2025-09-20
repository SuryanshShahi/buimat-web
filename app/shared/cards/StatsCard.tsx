import clsx from "clsx";
import { FC, Fragment, PropsWithChildren } from "react";
import CountUp from "react-countup";
import Divider from "../divider";
import Heading from "../heading";
import Text from "../heading/Text";
import CardWrapper from "./CardWrapper";
interface IStatsCard {
  data: {
    label: string;
    count: number;
    suffix: string;
  }[];
  className?: string;
}

const StatsCard: FC<PropsWithChildren<IStatsCard>> = ({
  data,
  className,
  children,
}) => {
  return (
    <CardWrapper className={clsx("w-max space-y-4", className)}>
      {children}
      <div className="flex flex-wrap gap-x-10 gap-y-7 items-center justify-center !px-6">
        {data.map((item, idx) => (
          <Fragment key={idx}>
            <div className={clsx("border-secondary w-[110px] text-center")}>
              <Heading
                type="bold"
                variant="brand-tertiary"
                className={children ? "text-2xl" : "text-[32px]"}
              >
                <CountUp end={item.count} duration={0.7} suffix={item.suffix} />
              </Heading>
              <Text
                className={clsx(!children && "-mt-1")}
                size={children ? "sm" : "base"}
              >
                {item.label}
              </Text>
            </div>
            {idx !== data?.length - 1 && (
              <Divider className="!h-10 !w-1 border-r-[1.5px] md:block hidden" />
            )}
          </Fragment>
        ))}
      </div>
    </CardWrapper>
  );
};

export default StatsCard;

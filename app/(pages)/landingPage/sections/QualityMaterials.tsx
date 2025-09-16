import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import useWindowDimensions from "@/app/utils/hooks/useWindowDimension";
import { materials } from "@/app/utils/static";
import clsx from "clsx";
import { Fragment } from "react";
import CountUp from "react-countup";

const QualityMaterials = () => {
  const stats = [
    { label: "Products", count: 100, suffix: "K +" },
    { label: "Suppliers", count: 20, suffix: "K +" },
    { label: "Categories", count: 35, suffix: "+" },
    { label: "States", count: 22, suffix: "+" },
  ];
 
  const { width } = useWindowDimensions();
  return (
    <div className="py-20 bg-[#f7f7f7] flex justify-center px-5">
      <div className="max-w-screen-2xl mx-auto gap-y-6 flex flex-col items-center">
        <div className="max-w-[525px] max-auto space-y-4">
          <Heading className="text-[32px] text-center leading-10" type="bold">
            Explore our extensive range of high quality materials
          </Heading>
          <Text className="text-center">
            Whether you’re building roads, skyscrapers, or commercial buildings,
            we are here to support your business every step of the way.
          </Text>
        </div>
        <CardWrapper className="flex flex-wrap gap-x-10 gap-y-7 items-center justify-center !px-6">
          {stats.map((item, idx) => (
            <Fragment key={idx}>
              <div className={clsx("border-secondary w-[110px]")}>
                <Heading
                  type="bold"
                  variant="brand-tertiary"
                  className="text-[32px]"
                >
                  <CountUp
                    end={item.count}
                    duration={0.7}
                    suffix={item.suffix}
                  />
                </Heading>
                <Text className="-mt-1">{item.label}</Text>
              </div>
              {idx !== stats?.length - 1 && (
                <Divider className="!h-10 !w-1 border-r-[1.5px] md:block hidden" />
              )}
            </Fragment>
          ))}
        </CardWrapper>

        <div className="border-y border-secondary grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
          {materials.map((item, idx) => (
            <div
              key={idx}
              className={clsx(
                "gap-y-2 border-secondary border-b p-10 flex flex-col justify-center items-center",
                ![4, 9].includes(idx) && Number(width) > 768 && "border-r",
                idx % 2 === 0 && Number(width) < 768 && "border-r"
              )}
            >
              <Img
                src={item.image}
                isLocal
                height={70}
                width={70}
                alt="hero"
                className="h-[70px] w-[70px]"
              />
              <Heading className="text-center">{item.label}</Heading>
            </div>
          ))}
        </div>
        <Button btnName="Explore Products" className="mt-4" />
      </div>
    </div>
  );
};

export default QualityMaterials;

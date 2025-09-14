import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import useWindowDimensions from "@/app/utils/hooks/useWindowDimension";
import clsx from "clsx";
import React from "react";

const WhyBuimat = () => {
  const materials = [
    {
      label: "Wide Selection",
      subtitle: "Thousands of products from top manufacturers",
      image: "/images/whyBuimat/buimat1.png",
    },
    {
      label: "Competitive Prices",
      subtitle: "Best rates guaranteed for both bulk and individual orders",
      image: "/images/whyBuimat/buimat2.png",
    },
    {
      label: "End-to-End Service",
      subtitle: "From sourcing to delivery, we ensure a seamless experience.",
      image: "/images/whyBuimat/buimat3.png",
    },
    {
      label: "Fast Delivery",
      subtitle: "Pan India shipping, ensuring timely delivery to your site",
      image: "/images/whyBuimat/buimat4.png",
    },
    {
      label: "Trusted Quality",
      subtitle:
        "Products sourced from certified brands, ensuring durability and reliability",
      image: "/images/whyBuimat/buimat5.png",
    },
    {
      label: "Easy Payment Options",
      subtitle: "Flexible payment methods to suit all types of buyers",
      image: "/images/whyBuimat/buimat6.png",
    },
  ];
  const { width } = useWindowDimensions();
  return (
    <div className="py-20 bg-[#f7f7f7] flex justify-center">
      <div className="max-w-screen-2xl mx-auto gap-y-6 flex flex-col items-center">
        <Heading className="text-[32px]" type="bold">
          Why BUIMAT !
        </Heading>
        <div className="border-secondary grid md:grid-cols-3 grid-cols-2">
          {materials.map((item, idx) => (
            <div
              key={idx}
              className={clsx(
                "gap-y-2 border-secondary sm:p-10 p-6 flex flex-col justify-center items-center w-full",
                ![2, 5].includes(idx) &&
                  Number(width) > 768 &&
                  "border-r border-b",
                ![1, 3, 5].includes(idx) && Number(width) < 768 && "border-r"
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
              <Heading className="text-center sm:text-2xl text-xl">{item.label}</Heading>
              <Text variant="tertiary" className="text-center max-w-[270px]">
                {item.subtitle}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBuimat;

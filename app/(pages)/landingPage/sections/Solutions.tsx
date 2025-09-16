import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import clsx from "clsx";
import React from "react";

const Solutions = () => {
  const solutions = {
    b2b: {
      title: "Bulk Orders?",
      subtitle: "We’ve Got You Covered!",
      image: "/images/hero1.webp",
      soln: [
        {
          label: "Wholesale Pricing",
          value: "Competitive prices tailored for bulk buyers.",
        },
        {
          label: "Custom Orders",
          value: "Source specific quantities or hard-to-find materials.",
        },
        {
          label: "Fast & Reliable Shipping",
          value:
            "Nationwide delivery to construction sites, ensuring your project stays on track.",
        },
        {
          label: "Account Managers",
          value: "Get personalized service and expert advice for your orders.",
        },
      ],
    },
    b2c: {
      title: "Building Your Dream Home",
      subtitle: "Starts Here",
      image: "/images/hero1.webp",
      soln: [
        {
          label: "Wide Range of Products",
          value:
            "Everything from cement, tiles, and paints, to plumbing and electrical materials.",
        },
        {
          label: "Expert Advice",
          value: "Access to detailed product information & usage guidelines.",
        },
        {
          label: "Doorstep Delivery",
          value:
            "Get materials delivered directly to your home or project site with ease.",
        },
        {
          label: "Secure Payment",
          value: "Easy, transparent payment options for individual buyers.",
        },
      ],
    },
  };
  return (
    <div className="max-w-screen-xl mx-auto space-y-24 px-5">
      {Object.entries(solutions).map(([key, value], idx) => (
        <div
          className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-6 place-content-center"
          key={key}
        >
          <div>
            <Img
              src={value?.image}
              isLocal
              height={535}
              width={505}
              alt="hero"
              className="max-h-[535px] w-[505px] mx-auto h-full object-cover rounded-2xl"
            />
            <div
              className={clsx(
                "h-[100px] w-[100px] rounded-lg z-10 relative opacity-70 -mt-14 lg:block hidden",
                idx === 0 ? "bg-brand-solid -ml-3" : "bg-blue-500 ml-auto -mr-3"
              )}
            />
          </div>

          <div className={clsx("space-y-4 mx-auto", idx && "lg:order-first")}>
            <div>
              <Text variant="brand-tertiary" className="uppercase" size="sm">
                {key} Solutions
              </Text>
              <Heading className="sm:text-[32px] text-2xl mt-4" type="bold">
                {value?.title}
              </Heading>
              <Heading className="sm:text-[32px] text-2xl mt-1" type="bold">
                {value?.subtitle}
              </Heading>
            </div>

            {value?.soln?.map((item, idx) => (
              <div key={idx}>
                <Heading className="sm:text-2xl text-xl">{item.label}</Heading>
                <Text variant="tertiary text-sm">{item.value}</Text>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solutions;

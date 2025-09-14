import Button from "@/app/shared/buttons/Button";
import Heading from "@/app/shared/heading";
import Img from "@/app/shared/Img";
import React from "react";

const Banner = () => {
  return (
    <div className="py-16 bg-[#FBF31C] px-5">
      <div className="flex flex-wrap items-center md:justify-between justify-center max-w-screen-xl mx-auto gap-10">
        <div className="max-w-[300px] space-y-4">
          <Heading
            className="text-[40px] leading-10 md:text-start text-center"
            variant="bold"
          >
            Best sellers in cement & bricks
          </Heading>
          <Button btnName="Shop Now" className="w-[200px] md:mx-0 mx-auto" />
        </div>
        <Img
          src="/images/partners/ultratech.png"
          isLocal
          height={164}
          width={534}
          alt="hero"
          className="md:order-last order-first"
        />
      </div>
    </div>
  );
};

export default Banner;

"use client";
import PageWrapper from "@/app/components/pageWrapper/PageWrapper";
import Button from "@/app/shared/buttons/Button";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import useWindowDimensions from "@/app/utils/hooks/useWindowDimension";
import { useMemo } from "react";
import Slider from "react-slick";
import Banner from "./sections/Banner";
import HeroSection from "./sections/HeroSection";
import QualityMaterials from "./sections/QualityMaterials";
import Solutions from "./sections/Solutions";
import WhyBuimat from "./sections/WhyBuimat";
const Home = () => {
  const logos = useMemo(
    () => [
      "/images/partners/acc.png",
      "/images/partners/centuryply.png",
      "/images/partners/reliance.png",
      "/images/partners/ultratech.png",
      "/images/partners/acc.png",
      "/images/partners/centuryply.png",
      "/images/partners/reliance.png",
      "/images/partners/ultratech.png",
    ],
    []
  );

  const { width } = useWindowDimensions();

  const settings = useMemo(
    () => ({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: Number(width) > 900 ? 6 : Number(width) > 550 ? 4 : 2,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
    }),
    [width]
  );
  return (
    <PageWrapper wrapperClass="space-y-20 mt-20">
      <HeroSection />
      <QualityMaterials />
      <Solutions />
      <div>
        <WhyBuimat />
        <Banner />
      </div>
      <div className="grid sm:grid-cols-2 max-w-screen-xl mx-auto gap-6 px-5">
        {Array(2)
          .fill(null)
          .map((_, idx) => (
            <div
              key={idx}
              className="bg-[url('/images/hero1.png')] rounded-2xl h-[400px] bg-cover relative bg-no-repeat flex flex-col"
            >
              <div className="bg-bannerOverlay h-full w-full absolute" />
              <div className="mt-auto z-10 pl-6 pb-6">
                <Text variant="white">Safety equipments starting</Text>
                <Heading variant="brand-tertiary">₹742</Heading>
                <Button
                  btnName="Shop Now"
                  className="px-10 !bg-brand-solid mt-4"
                  styleBtnName="text-black"
                />
              </div>
            </div>
          ))}
      </div>
      <div className="space-y-8 mb-20">
        <Heading className="text-[32px] text-center" type="bold">
          Trusted names across all product ranges
        </Heading>
        <div className="relative overflow-hidden">
          <Slider {...settings}>
            {logos.map((item, idx) => (
              <div className="bg-gray-100 rounded-lg py-6 px-4" key={idx}>
                <Img
                  key={`first-${idx}`}
                  alt="logo"
                  src={item}
                  isLocal
                  height={30}
                  width={192}
                  className="object-contain px-8 h-[30px] mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;

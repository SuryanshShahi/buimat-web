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
import LimitedOffers from "./sections/LimitedOffers";
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
      <LimitedOffers className="max-w-screen-xl mx-auto px-5" />
      <div className="space-y-8 mb-20">
        <Heading className="text-[32px] text-center" type="bold">
          Trusted names across all product ranges
        </Heading>
        <div className="relative overflow-hidden partnerList">
          <Slider {...settings}>
            {logos.map((item, idx) => (
              <div className="bg-gray-50 rounded-lg py-6 px-4" key={idx}>
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

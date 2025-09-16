"use client";
import PageWrapper from "@/app/components/pageWrapper/PageWrapper";
import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import Chip from "@/app/shared/Chip";
import Heading from "@/app/shared/heading";
import HeadingWithBtn from "@/app/shared/heading/HeadingWithBtn";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import useWindowDimensions from "@/app/utils/hooks/useWindowDimension";
import { materials, products } from "@/app/utils/static";
import clsx from "clsx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuShapes } from "react-icons/lu";
import Slider from "react-slick";
import LimitedOffers from "../landingPage/sections/LimitedOffers";

const ArrowLeft = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    tabIndex={0}
    aria-label="Go left"
    className="bg-black/80 backdrop-blur-sm absolute z-20 sm:top-[130px] top-20 sm:left-5 left-2 duration-300 sm:h-10 sm:w-10 h-8 w-8 cursor-pointer rounded-full flex justify-center items-center"
  >
    <IoIosArrowBack className="text-white sm:text-[27px] text-xl mr-[2px]" />
  </div>
);

const ArrowRight = ({ onClick }: { onClick?: () => void }) => (
  <div
    role="button"
    tabIndex={0}
    onKeyDown={onClick}
    aria-label="Go right"
    onClick={onClick}
    className="bg-black/80 backdrop-blur-sm absolute z-20 sm:top-[130px] top-20 sm:right-5 right-2 sm:h-10 sm:w-10 h-8 w-8 duration-300 cursor-pointer rounded-full flex justify-center items-center"
  >
    <IoIosArrowForward className="text-white sm:text-[27px] text-xl ml-1" />
  </div>
);
const Page = () => {
  const { width } = useWindowDimensions();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const data = [
    {
      title: "Millions of product offerings",
      description:
        "Explore products and suppliers for your business from millions of offerings PAN india.",
      icon: <LuShapes size={30} className="text-brand-tertiary" />,
    },
    {
      title: "Assured quality and transactions",
      description:
        "Ensure production quality from verified suppliers, with your orders protected from payment to delivery.",
      icon: <LuShapes size={30} className="text-brand-tertiary" />,
    },
    {
      title: "One-stop trading solution",
      description:
        "Order seamlessly from product/supplier search to order management, payment, and fulfillment.",
      icon: <LuShapes size={30} className="text-brand-tertiary" />,
    },
    {
      title: "Tailored trading experience",
      description:
        "Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, tohelp grow your business every step of the way.",
      icon: <LuShapes size={30} className="text-brand-tertiary" />,
    },
  ];
  return (
    <PageWrapper wrapperClass="bg-gray-100 pt-5 space-y-11">
      <div className="max-w-screen-2xl mx-auto space-y-11 px-5">
        <div className="space-y-5">
          <div className="flex gap-x-12 overflow-x-scroll">
            {materials.map((item, idx) => (
              <div className="space-y-2" key={idx}>
                <div
                  className={clsx(
                    "flex flex-col justify-center items-center border bg-white rounded-full h-[70px] w-[70px] mx-auto"
                  )}
                >
                  <Img
                    src={item.image}
                    isLocal
                    height={40}
                    width={40}
                    alt="hero"
                    className="h-10 w-10"
                  />
                </div>
                <Heading className="text-center text-xs text-nowrap">
                  {item.label}
                </Heading>
              </div>
            ))}
          </div>

          <Slider {...settings} className="mb-20">
            {Array(2)
              .fill(null)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-[url('/images/banner.png')] rounded-2xl h-[300px] bg-cover relative bg-no-repeat"
                >
                  <div className="bg-bannerOverlay h-full w-full absolute flex items-center">
                    <div className="z-10 max-w-[390px] ml-[150px]">
                      <Text
                        variant="white"
                        className="!text-[40px] leading-10"
                        type="bold"
                      >
                        20% off on top brand TMT Steel Bars
                      </Text>
                      <Button
                        btnName="Shop Now"
                        className="!w-[200px] !bg-brand-solid mt-4"
                        styleBtnName="text-black"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>

        {Object.entries(products).map(([key, item]) => (
          <div key={key} className="space-y-4">
            <div className="space-y-2">
              {item.tagName && (
                <Chip
                  title={item.tagName}
                  className="!bg-brand-solid !text-black !border-none !uppercase !px-[10px] !py-[6px] !font-bold"
                  size="xs"
                />
              )}
              <HeadingWithBtn
                btnText="View All"
                styleBtn="flex items-center !text-black"
                btnIcon={
                  <IoIosArrowForward className="text-tertiary" size={16} />
                }
                headingProps={{
                  children: item?.title,
                }}
              />
            </div>
            <div className="flex gap-x-3 gap-y-6 overflow-x-scroll">
              {item.items.map((e, idx) => (
                <div className="bg-white rounded-lg min-w-[245px]" key={idx}>
                  <Img
                    src="/images/hero1.webp"
                    alt=""
                    height={250}
                    width={250}
                    isLocal
                    className="object-cover h-[250px] w-full rounded-t-lg"
                  />
                  <div className="p-4">
                    <Text size="sm" className="line-clamp-2">
                      {e.title}
                    </Text>
                    <div className="flex gap-x-2">
                      <Heading className="text-sm">{e.discountPrice}</Heading>
                      <Text
                        size="sm"
                        variant="tertiary"
                        className="line-through"
                      >
                        {e.price}
                      </Text>
                      <span className="text-xs mt-[2px] text-tertiary">
                        {e.unit}
                      </span>
                    </div>
                    <Text size="sm" variant="tertiary">
                      {e.bottomText}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <LimitedOffers />
      </div>
      <div className="bg-secondary p-10 gap-5 grid lg:grid-cols-4 sm:grid-cols-2">
        {data.map((item, idx) => (
          <CardWrapper className="!bg-[#324456] space-y-2" key={idx}>
            <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-[#435B72]">
              {item.icon}
            </div>
            <Heading className="text-white text-2xl">{item.title}</Heading>
            <Text className="text-white/70">{item.description}</Text>
          </CardWrapper>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Page;

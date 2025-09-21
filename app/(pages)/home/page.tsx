"use client";
import PageWrapper from "@/app/components/pageWrapper/PageWrapper";
import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import ProductCard from "@/app/shared/cards/ProductCard";
import Chip from "@/app/shared/Chip";
import ProductTypes from "@/app/shared/components/ProductTypes";
import Heading from "@/app/shared/heading";
import HeadingWithBtn from "@/app/shared/heading/HeadingWithBtn";
import Text from "@/app/shared/heading/Text";
import useWindowDimensions from "@/app/utils/hooks/useWindowDimension";
import { materials, products } from "@/app/utils/static";
import { useRouter } from "next/navigation";
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
        "Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.",
      icon: <LuShapes size={30} className="text-brand-tertiary" />,
    },
  ];
  const router = useRouter();
  return (
    <PageWrapper wrapperClass="bg-gray-100 pt-5 space-y-11">
      <div className="max-w-screen-2xl mx-auto space-y-11 px-5">
        <div className="space-y-5">
          <ProductTypes data={materials} className="overflow-x-scroll" />
          <Slider {...settings} className="mb-20">
            {Array(2)
              .fill(null)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-[url('/images/hero1.webp')] rounded-2xl sm:h-[300px] h-[200px] bg-cover relative bg-no-repeat"
                >
                  <div className="bg-bannerOverlay h-full w-full absolute flex md:items-center items-end rounded-2xl">
                    <div className="z-10 md:max-w-[390px] max-w-[200px] md:ml-[150px] ml-5 md:mb-0 mb-5">
                      <Text
                        variant="white"
                        className="md:!text-[40px] md:leading-10"
                        type="bold"
                      >
                        20% off on top brand TMT Steel Bars
                      </Text>
                      <Button
                        btnName="Shop Now"
                        size={Number(width) > 640 ? "md" : "xs"}
                        className="md:!w-[200px] !bg-brand-solid mt-4"
                        styleBtnName="text-black"
                        onClick={() => router.push(`/products`)}
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
                  size="xs"
                  className="!bg-brand-solid !text-black !border-none !uppercase !px-[10px] !py-[6px] !font-bold sm:!text-sm !text-[10px]"
                />
              )}
              <HeadingWithBtn
                className="gap-x-4 sm:!items-center !items-start"
                btnText="View All"
                styleBtn="flex items-center !text-black sm:!text-base !text-xs text-nowrap sm:mt-0 mt-1"
                btnIcon={
                  <IoIosArrowForward className="text-tertiary sm:text-base text-sm" />
                }
                headingProps={{
                  children: item?.title,
                  className: "sm:!text-2xl !text-base",
                }}
              />
            </div>
            <div className="flex gap-x-3 gap-y-6 overflow-x-scroll">
              {item.items.map((e, idx) => (
                <ProductCard
                  data={e}
                  key={idx}
                  onClick={() => router.push(`/${item.path}`)}
                />
              ))}
            </div>
          </div>
        ))}

        <LimitedOffers />
      </div>
      <div className="bg-secondary sm:p-10 py-8">
        <div className="gap-5 grid lg:grid-cols-4 sm:grid-cols-2 max-w-screen-2xl mx-auto px-5">
          {data.map((item, idx) => (
            <CardWrapper className="!bg-[#324456] space-y-2" key={idx}>
              <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-[#435B72]">
                {item.icon}
              </div>
              <Heading className="text-white sm:text-2xl text-xl">
                {item.title}
              </Heading>
              <Text className="text-white/70 sm:text-base text-sm">
                {item.description}
              </Text>
            </CardWrapper>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;

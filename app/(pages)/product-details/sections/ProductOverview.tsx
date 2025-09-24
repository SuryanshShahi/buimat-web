import Accordion from "@/app/shared/accordion";
import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import Chip from "@/app/shared/Chip";
import Faqs from "@/app/shared/components/Faqs";
import RatingReviews from "@/app/shared/components/RatingReviews";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import TabBar from "@/app/shared/tabs";
import { FaArrowLeft, FaArrowTrendUp, FaStar } from "react-icons/fa6";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { LuClipboardCheck } from "react-icons/lu";
import { MdVerifiedUser } from "react-icons/md";
import Slider from "react-slick";
const ArrowLeft = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    tabIndex={0}
    aria-label="Go left"
    className="bg-black/80 backdrop-blur-sm absolute z-20 -top-3 duration-300 h-8 w-8 left-1/2 -translate-x-1/2 cursor-pointer rounded-full flex justify-center items-center"
  >
    <IoIosArrowUp className="text-white" size={18} />
  </div>
);

const ArrowRight = ({ onClick }: { onClick?: () => void }) => (
  <div
    role="button"
    tabIndex={0}
    onKeyDown={onClick}
    aria-label="Go right"
    onClick={onClick}
    className="bg-black/80 backdrop-blur-sm absolute z-20 -bottom-3 h-8 w-8 left-1/2 -translate-x-1/2 duration-300 cursor-pointer rounded-full flex justify-center items-center"
  >
    <IoIosArrowDown className="text-white mt-1" size={18} />
  </div>
);
const ProductOverview = () => {
  const stats = [
    {
      label: "4.5 / 5 (97)",
      icon: <FaStar className="text-brand-tertiary" size={20} />,
    },
    {
      label: "1042 Sold",
      icon: <LuClipboardCheck size={20} className="text-blue-400" />,
    },
    {
      label: "27 Enquiries in Last 30 days",
      icon: <FaArrowTrendUp size={20} className="text-success-400" />,
    },
    {
      label: "2 years Warranty",
      icon: <HiOutlineBadgeCheck size={20} className="text-red-400" />,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };
  return (
    <div className="space-y-4 max-w-[700px] w-full">
      <Heading className="sm:text-lg flex gap-x-3" type="bold">
        <FaArrowLeft className="mt-[6px] text-lg" />
        600X600mm Porcelanto Glossy Glazed Ceramic Tile For Floor Standard White
        Marble Porcelain Tiles
      </Heading>
      <div className="flex flex-wrap items-center justify-between lg:gap-x-10 gap-4">
        {stats.map((stat, idx) => (
          <div className="flex items-center gap-x-2" key={idx}>
            {stat.icon}
            <Text size="sm" className="mt-[2px]">
              {stat.label}
            </Text>
          </div>
        ))}
      </div>
      <Chip
        className="px-4 !py-2 w-full"
        title={
          <Text
            className="flex items-center gap-x-2 sm:text-sm text-xs"
            variant="btn-primary"
          >
            Supplier :{" "}
            <MdVerifiedUser className="text-brand-tertiary" size={16} />{" "}
            <span className="underline">Meraki Enterprises Pvt Ltd.</span> (5+
            Years)
          </Text>
        }
      />
      <div className="!mt-10 flex sm:flex-row flex-col items-center gap-6">
        <div className="min-w-[90px] max-w-[90px] sm:block hidden">
          <Slider {...settings}>
            {Array(8)
              .fill(null)
              .map((item, idx) => (
                <Img
                  key={idx}
                  src="/images/hero1.webp"
                  alt="product"
                  height={90}
                  width={90}
                  isLocal
                  className="h-[90px] min-w-[90px] rounded-lg"
                />
              ))}
          </Slider>
        </div>
        <div className="flex gap-x-4 max-w-[calc(100vw-40px)] overflow-x-scroll sm:hidden">
          {Array(8)
            .fill(null)
            .map((_, idx) => (
              <Img
                key={idx}
                src="/images/hero1.webp"
                alt="product"
                height={90}
                width={90}
                isLocal
                className="h-[90px] min-w-[90px] rounded-lg"
              />
            ))}
        </div>
        <CardWrapper className="min-h-[400px] w-full"></CardWrapper>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <Heading className="text-sm">Select Color</Heading>
        <div className="flex gap-x-2">
          {Array(3)
            .fill(null)
            .map((item, idx) => (
              <Img
                key={idx}
                src="/images/hero1.webp"
                alt="product"
                height={90}
                width={90}
                isLocal
                className="h-16 w-16 rounded-lg"
              />
            ))}
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-center gap-y-2">
        <Heading className="text-sm">Select Size</Heading>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {["300X300mm", "600X600mm", "1200X1200mm"].map((item, idx) => (
            <Button btnName={item} size="sm" variant="secondary" key={idx} />
          ))}
        </div>
      </div>
      <Divider />
      <Accordion
        data={[
          {
            body: (
              <div className="space-y-4 text-sm">
                <Text variant="tertiary">
                  Durable and Long-Lasting: Our Parcos ceramic glazed polished
                  ceramic pisos carreaux porcelanato porcelain marble floor
                  tiles are designed to withstand heavy foot traffic and harsh
                  conditions, ensuring a long-lasting and durable finish for
                  your home or commercial space.
                </Text>
                <Text variant="tertiary">
                  Easy to Clean and Maintain: With a non-slip and antibacterial
                  surface, our tiles are perfect for high-traffic areas,
                  reducing the risk of accidents and maintaining a clean and
                  hygienic environment, as requested by our customer.
                </Text>
                <Text variant="tertiary">
                  Heat Insulation and Energy Efficiency: Our tiles provide
                  excellent heat insulation, reducing heat transfer and keeping
                  your space cooler in the summer and warmer in the winter,
                  making them an ideal choice for energy-conscious customers.
                </Text>
                <Text variant="tertiary">
                  Style and Versatility: Our modern design style and stone
                  imitation texture make our tiles suitable for various interior
                  design styles, from contemporary to traditional, and can be
                  used for both floor and wall applications.
                </Text>
                <Text variant="tertiary">
                  Warranty and Support: We offer a 2-year warranty and online
                  technical support, providing customers with peace of mind and
                  confidence in their purchase, as valued by our customer.
                </Text>
              </div>
            ),
            title: "Product Overview",
          },
          {
            body: (
              <table className="bg-white w-full">
                {[
                  { label: "Use", value: "Interior Tiles" },
                  {
                    label: "Tile Type",
                    value: "Floor Tiles, Wall Tiles",
                  },
                  { label: "Material", value: "Porcelain Tiles" },
                  {
                    label: "Application",
                    value: "Hotel,villa,apartment",
                  },
                  { label: "Brand", value: "Cera" },
                  { label: "Design Style", value: "Modern" },
                  { label: "Design Pattern", value: "Abstract" },
                  {
                    label: "Function",
                    value:
                      "Antibacterial, Heat Insulation, Non-Slip, Wear-Resistant, Anti-slip",
                  },
                  { label: "Warranty", value: "2 years" },
                  { label: "Luster", value: "GLOSSY" },
                  { label: "Size", value: "600 X 600mm" },
                  { label: "Water Absorption", value: "<0.5%" },
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-2 px-4 border border-secondary text-sm">
                      {item.label}
                    </td>
                    <td className="py-2 px-4 border border-secondary text-sm">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </table>
            ),
            title: "Product Details",
          },
          {
            body: (
              <div>
                <TabBar
                  tabs={[
                    {
                      name: "Product Reviews",
                      component: (
                        <div className="space-y-4">
                          <RatingReviews />
                          <Divider />
                          <Faqs />
                        </div>
                      ),
                    },
                    {
                      name: "Supplier Reviews",
                      component: <RatingReviews />,
                    },
                  ]}
                  variant="link"
                />
              </div>
            ),
            title: "Ratings & Reviews",
          },
        ]}
        wrapperClass="!mt-0 !px-0"
        styleTitle="!font-semibold !text-base"
      />
    </div>
  );
};

export default ProductOverview;

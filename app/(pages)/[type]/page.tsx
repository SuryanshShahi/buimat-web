"use client";
import PageWrapper from "@/app/components/pageWrapper/PageWrapper";
import Accordion from "@/app/shared/accordion";
import BreadCrumbs from "@/app/shared/BreadCrumbs";
import Button from "@/app/shared/buttons/Button";
import ProductCard from "@/app/shared/cards/ProductCard";
import SupplierCard from "@/app/shared/cards/SupplierCard";
import Heading from "@/app/shared/heading";
import SelectionControl from "@/app/shared/input/SelectionControl";
import TabBar from "@/app/shared/tabs";
import Tags from "@/app/shared/Tags";
import { SvgTruck } from "@/app/svgs";
import { productFilters, products } from "@/app/utils/static";
import { tw } from "@/tailwind.config";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";

const Page = () => {
  const router = useRouter();
  const stats = [
    {
      label: "Verified Supplier",
      icon: <MdVerifiedUser className="text-brand-tertiary" size={20} />,
    },
    {
      label: "4.7 / 5 (293)",
      icon: <FaStar className="text-brand-tertiary" size={20} />,
    },
    {
      label: "31.3k Orders Delivered",
      icon: <SvgTruck fill={tw.textColor["brand-tertiary"]} />,
    },
  ];
  const tabs = [
    {
      name: "Products",
      component: (
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-4 gap-2">
          {Array(40)
            .fill(products.recentItems.items?.[0])
            .map((item, idx) => (
              <ProductCard
                data={{ ...item, styleImage: "sm:!h-[200px]" }}
                key={idx}
                className="sm:!min-w-[210px] !min-w-full"
                onClick={() => router.push(`/product-details?id=${item.title}`)}
              />
            ))}
        </div>
      ),
    },
    {
      name: "Suppliers",
      component: (
        <div className="space-y-4">
          {Array(10)
            .fill({
              title: "BUIMAT",
              stats,
              certification: "BIS Certified",
              duration: "5+ Years with BUIMAT",
              minOrder: "100 sq.ft",
              image: products.recentItems.items?.[0].image,
            })
            .map((item, idx) => (
              <SupplierCard
                data={item}
                key={idx}
                className="w-full"
                onClick={() =>
                  router.push(`/supplier-details?id=${item.title}`)
                }
              />
            ))}
        </div>
      ),
    },
  ];
  const data = [
    "Select Category",
    "Suppliers",
    "Brand",
    "Design Pattern",
    "Design Style",
    "Usage",
    "Material",
  ];
  const filters = data.map((item, index) => ({
    title: item,
    body: (
      <div className="space-y-3">
        {productFilters[0].options.map((item, idx) => (
          <SelectionControl type="checkbox" label={item} key={idx} />
        ))}
      </div>
    ),
    isOpen: index < 2,
  }));
  return (
    <PageWrapper wrapperClass="bg-gray-100">
      <div className="flex">
        <div className="max-w-[285px] w-full bg-white border-r lg:block hidden">
          <Heading type="bold" className="text-lg py-3 bg-blue-100 pl-4">
            Tiles
          </Heading>
          <Accordion data={filters} styleTitle="!text-base" />
          <Button
            btnName="More Filters"
            size="xs"
            variant="secondary"
            className="!rounded w-[130px] mx-auto my-6"
            styleBtnName="text-black"
          />
        </div>
        <div className="sm:px-5 px-4 w-full pb-5 overflow-y-scroll max-h-[calc(100vh-80px)] lg:space-y-0 lg:pt-0 space-y-4 pt-4">
          <div className="flex gap-x-4 items-center">
            <BreadCrumbs />
            <div className="flex gap-x-2">
              {["Tiles", "Ceramic", "Marble"].map((item) => (
                <Tags
                  key={item}
                  title={item}
                  onClick={() => {}}
                  className="bg-white !rounded-full !text-xs"
                />
              ))}
            </div>
          </div>
          <TabBar tabs={tabs} variant="button" className="relative">
            <Button
              btnName="Sort By"
              variant="secondary"
              size="xs"
              icon={<IoFilterSharp />}
              iconFirst
              className="!absolute right-2 -top-[17px]"
            />
          </TabBar>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;

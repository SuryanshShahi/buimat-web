"use client";
import PageWrapper from "@/app/components/pageWrapper/PageWrapper";
import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import StatsCard from "@/app/shared/cards/StatsCard";
import UserCard from "@/app/shared/cards/UserCard";
import Chip from "@/app/shared/Chip";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import ProductTypes from "@/app/shared/ProductTypes";
import { materials } from "@/app/utils/static";
import clsx from "clsx";
import { Fragment } from "react";
import CountUp from "react-countup";
import { FaArrowLeft, FaArrowLeftLong, FaStar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { TbRefresh } from "react-icons/tb";

const Page = () => {
  const stats = [
    { label: "Products", count: 100, suffix: "K +" },
    { label: "Suppliers", count: 20, suffix: "K +" },
    { label: "Categories", count: 35, suffix: "+" },
    { label: "States", count: 22, suffix: "+" },
  ];
  return (
    <PageWrapper
      wrapperClass="pb-10"
      breadCrumbs={[
        {
          label: "Tiles",
        },
        {
          label: "Floor Tiles",
        },
      ]}
    >
      <div className="flex lg:flex-row flex-col sm:px-5 px-4 gap-10 lg:items-start items-center mt-6 max-w-screen-xl mx-auto">
        <CardWrapper className="space-y-4 w-max !p-6 shadow-card h-max">
          <div className="rounded-full h-[100px] w-[100px] relative mx-auto">
            <Img
              src="/images/hero1.webp"
              height={100}
              width={100}
              alt=""
              isLocal
              className="rounded-full h-[100px] w-[100px]"
            />
            <div className="bg-black h-[30px] w-[30px] rounded-full flex justify-center items-center bottom-0 right-0 absolute">
              <MdVerifiedUser className="text-brand-tertiary" size={16} />
            </div>
          </div>
          <Divider />
          {["About Supplier", "Products", "Rating & Reviews", "FAQs"].map(
            (item, idx) => (
              <Heading key={idx} type="medium" className="text-sm">
                {item}
              </Heading>
            )
          )}
          <div className="flex gap-x-4">
            <Button btnName="Send Enquiry" size="sm" />
            <Button
              btnName="Contact Supplier"
              className="!bg-brand-solid"
              styleBtnName="text-black"
              size="sm"
            />
          </div>
        </CardWrapper>

        <div className="space-y-6">
          <StatsCard data={stats} className="shadow-card !w-full">
            <Heading className="text-lg flex items-center gap-x-3" type="bold">
              <FaArrowLeft />
              Meraki Enterprises Pvt Ltd.
            </Heading>
            <Divider />
          </StatsCard>

          <CardWrapper className="space-y-2 shadow-card">
            <Heading type="bold">About</Heading>
            <div className="space-y-4">
              <Text size="sm" variant="tertiary">
                At Meraki Enterprises Pvt Ltd, we are committed to providing the
                highest quality construction materials to help bring your
                projects to life. With years of industry experience, we
                specialize in offering a wide range of products, including
                tiles, sanitary ware, cement, TMT steel bars, and more. Whether
                you're building a dream home, commercial complex, or undertaking
                large-scale infrastructure projects, we are your trusted partner
                in delivering durable and reliable construction solutions.
              </Text>
              <Text size="sm" variant="tertiary">
                Our product offerings are sourced from the most trusted
                manufacturers and brands, ensuring that each item meets the
                highest standards of performance, safety, and design. From
                aesthetic and functional tiles to strong and reliable building
                materials, we make it our mission to supply the essentials that
                power your construction projects.
              </Text>
              <Text size="sm" variant="tertiary">
                We pride ourselves on our customer-centric approach, providing
                personalized advice and efficient delivery services to ensure
                your needs are met, no matter the size of the job. Our team is
                dedicated to offering expert guidance on product selection and
                project planning, ensuring your construction process is as
                seamless and cost-effective as possible.
              </Text>
            </div>
          </CardWrapper>

          <CardWrapper className="space-y-4 shadow-card">
            <Heading type="bold">Products</Heading>
            <ProductTypes
              data={materials.slice(0, 4)}
              className="grid md:grid-cols-4 grid-cols-2"
            />
          </CardWrapper>

          <CardWrapper className="space-y-6 shadow-card">
            <Heading type="bold">Rating & Reviews</Heading>
            <div className="flex items-center gap-x-2 text-2xl">
              <FaStar className="text-brand-tertiary" />
              <Heading type="bold">4.5 / 5 (97)</Heading>
            </div>
            <div className="flex sm:gap-4 gap-3 flex-wrap">
              <Chip title="All" className="rounded-full !px-3" />
              <Chip
                title="With Photos & Videos"
                className="rounded-full !px-3"
              />
              <Chip
                title="Most Recent"
                className="rounded-full !pl-3 !pr-2"
                image={<IoIosArrowDown className="order-last" />}
              />
            </div>
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <div className="space-y-2" key={idx}>
                  <UserCard title="Suryansh" subtitle="Nov 12" showInitials>
                    <div className="flex items-center gap-x-1 ml-auto">
                      <FaStar className="text-brand-tertiary" />
                      <Heading type="bold">4</Heading>
                    </div>
                  </UserCard>
                  <Text size="sm" variant="tertiary" className="ml-[53px]">
                    Very professional tile supplier, my project went very
                    smoothly, for different projects they also give me different
                    programs and suggestions, thank you very much
                  </Text>
                </div>
              ))}
            <Button
              btnName="Load More"
              styleBtnName="text-sm"
              variant="tertiary-color"
              icon={<TbRefresh />}
              className="ml-auto"
              iconFirst
            />
          </CardWrapper>

          <CardWrapper className="space-y-6 shadow-card">
            <Heading type="bold">Question & Answers</Heading>
            {Array(3)
              .fill({
                label: "Are you a trade company or a manufacturer?",
                value:
                  "We are a more than ten year experience and owned CE,CCC,SGS,ISO approved Manufacturer.",
              })
              .map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <Heading type="medium" className="text-sm">
                    Q: {item.label}
                  </Heading>
                  <Text size="sm" variant="tertiary">
                    <span className="font-medium">A:</span> {item.value}
                  </Text>
                </div>
              ))}
            <Button
              btnName="Load More"
              styleBtnName="text-sm"
              variant="tertiary-color"
              icon={<TbRefresh />}
              className="ml-auto"
              iconFirst
            />
          </CardWrapper>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;

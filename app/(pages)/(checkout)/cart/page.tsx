"use client";
import Button from "@/app/shared/buttons/Button";
import CounterBtn from "@/app/shared/buttons/CounterBtn";
import CardWrapper from "@/app/shared/cards/CardWrapper";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import SelectionControl from "@/app/shared/input/SelectionControl";
import useWindowDimensions from "@/app/utils/hooks/useWindowDimension";
import { Fragment } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { RiHeartAdd2Line } from "react-icons/ri";

const page = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="max-w-screen-2xl mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <Heading className="sm:text-lg flex gap-x-3 items-center" type="bold">
          <FaArrowLeft className="text-lg sm:block hidden" />
          Cart
        </Heading>
        <SelectionControl
          type="checkbox"
          label="Select All Items (2)"
          styleLabel="!text-black !font-medium"
        />
      </div>
      <div className="space-y-6">
        {Array(2)
          .fill(null)
          .map((_, idx) => (
            <CardWrapper className="space-y-6 !p-5" key={idx}>
              <div className="flex gap-x-4">
                <Img
                  src="/images/hero1.webp"
                  alt=""
                  height={90}
                  width={90}
                  isLocal
                  className="sm:h-[90px] sm:min-w-[90px] rounded-lg"
                />
                <div className="space-y-1">
                  <Text size="sm" className="line-clamp-2">
                    600X600mm Porcelanto Glossy Glazed Ceramic Tile For Floor
                    Standard White Marble Porcelain Tiles
                  </Text>
                  <Text size="sm" variant="tertiary">
                    Min. Order - 100 sq. feet
                  </Text>
                </div>
              </div>
              <div className="sm:space-y-4 space-y-6">
                {Array(2)
                  .fill(null)
                  .map((_, idx) => (
                    <Fragment key={idx}>
                      <div className="space-y-4 sm:!-mb-2">
                        <SelectionControl
                          type="checkbox"
                          wrapperClass="!gap-x-3"
                        >
                          <div className="flex sm:flex-row flex-col gap-3 sm:justify-between w-full sm:items-center">
                            <div className="flex gap-x-3 w-full">
                              <Img
                                src="/images/hero1.webp"
                                alt=""
                                height={50}
                                width={50}
                                isLocal
                                className="h-[50px] min-w-[50px] rounded-lg"
                              />
                              <div>
                                <Text size="sm">Colour / Variation Name 1</Text>
                                <Text size="sm" type="bold">
                                  ₹87.15{" "}
                                  <span className="text-tertiary font-normal text-xs">
                                    per sq. ft.
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <div className="flex justify-between w-full items-center">
                              <CounterBtn
                                add={() => {}}
                                remove={() => {}}
                                value={1}
                              />
                              <Heading className="text-sm" type="bold">
                                ₹4812
                              </Heading>
                            </div>
                          </div>
                        </SelectionControl>
                        <div className="sm:space-y-2 space-y-4 sm:ml-7">
                          <Button
                            btnName="Estimated Delivery by 15th Jan - 20th Jan"
                            className="!bg-brand-primary"
                            styleBtnName="!text-black !font-normal sm:text-sm text-xs"
                            fullWidth
                          />
                          <div className="flex ml-auto xs:justify-end justify-center sm:gap-x-0 gap-x-4">
                            <Button
                              btnName="Remove Product"
                              variant={
                                Number(width) > 640
                                  ? "tertiary"
                                  : "tertiary-link"
                              }
                              icon={
                                <FaRegTrashAlt className="text-tertiary sm:text-base -mt-[2px] text-sm" />
                              }
                              className="sm:text-sm text-xs"
                              iconFirst
                            />
                            <Button
                              btnName="Move to Wishlist"
                              variant={
                                Number(width) > 640
                                  ? "tertiary"
                                  : "tertiary-link"
                              }
                              icon={
                                <RiHeartAdd2Line className="text-tertiary sm:text-xl text-base" />
                              }
                              className="sm:text-sm text-xs"
                              iconFirst
                            />
                          </div>
                        </div>
                      </div>
                      {idx !== 1 && <Divider />}
                    </Fragment>
                  ))}
              </div>
            </CardWrapper>
          ))}
      </div>
    </div>
  );
};

export default page;

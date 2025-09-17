import Button from "@/app/shared/buttons/Button";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import useWindowDimensions from "@/app/utils/hooks/useWindowDimension";
import clsx from "clsx";

const LimitedOffers = ({ className }: { className?: string }) => {
  const { width } = useWindowDimensions();
  return (
    <div className={clsx("grid sm:grid-cols-2 gap-6", className)}>
      {Array(2)
        .fill(null)
        .map((_, idx) => (
          <div
            key={idx}
            className="bg-[url('/images/hero1.webp')] rounded-2xl sm:h-[400px] h-[300px] bg-cover bg-center relative bg-no-repeat flex flex-col"
          >
            <div className="bg-bannerOverlay h-full w-full absolute rounded-2xl" />
            <div className="mt-auto z-10 pl-6 pb-6">
              <Text variant="white" className="sm:text-2xl text-xl" type="bold">
                Safety equipments starting
              </Text>
              <Heading variant="brand-tertiary" className="sm:text-2xl text-xl">
                ₹742
              </Heading>
              <Button
                btnName="Shop Now"
                className="!bg-brand-solid mt-4 sm:!w-[150px]"
                styleBtnName="text-black"
                size={Number(width) > 640 ? "md" : "xs"}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default LimitedOffers;

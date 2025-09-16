import Button from "@/app/shared/buttons/Button";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import clsx from "clsx";

const LimitedOffers = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("grid sm:grid-cols-2 gap-6",className)}>
      {Array(2)
        .fill(null)
        .map((_, idx) => (
          <div
            key={idx}
            className="bg-[url('/images/hero1.webp')] rounded-2xl h-[400px] bg-cover bg-center relative bg-no-repeat flex flex-col"
          >
            <div className="bg-bannerOverlay h-full w-full absolute rounded-2xl" />
            <div className="mt-auto z-10 pl-6 pb-6">
              <Text variant="white" size="2xl" type="bold">
                Safety equipments starting
              </Text>
              <Heading variant="brand-tertiary" className="text-2xl">
                ₹742
              </Heading>
              <Button
                btnName="Shop Now"
                className="px-10 !bg-brand-solid mt-4 !w-[150px]"
                styleBtnName="text-black"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default LimitedOffers;

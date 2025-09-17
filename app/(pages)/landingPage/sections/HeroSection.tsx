import Button from "@/app/shared/buttons/Button";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import TextWithLinks from "@/app/shared/heading/TextWithLinks";
import Img from "@/app/shared/Img";
import useWindowDimensions from "@/app/utils/hooks/useWindowDimension";

const HeroSection = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="lg:grid grid-cols-2 flex flex-col place-items-center justify-between px-5 lg:gap-x-10 gap-y-20">
      <div className="space-y-6 max-w-[525px]">
        <div>
          <Heading
            type="bold"
            className="md:text-[64px] sm:text-[40px] sm:leading-[50px] text-[32px] leading-10 md:leading-[64px]"
          >
            From Foundation to Finish.
          </Heading>
          <Text className="md:text-2xl" variant="tertiary">
            Bridging India&apos;s Construction Needs.
          </Text>
        </div>
        <div className="flex md:flex-row flex-col md:items-center gap-6">
          <Button
            btnName="Register to Explore Products"
            size={Number(width) > 640 ? "md" : "xs"}
          />
          <div className="group">
            <TextWithLinks
              links={[{ label: "Log In", link: "/login" }]}
              text="Already have an account?"
            />
            <Divider
              variant="brand"
              className="!border-brand !border-[1.5px] rounded-full group-hover:!w-full !w-[40%] duration-300"
            />
          </div>
        </div>
      </div>
      <div className="flex xxs:flex-row flex-col xxs:gap-4 gap-y-6 justify-center items-center w-full">
        {[
          { label: "GST-Compliant Customers", image: "/images/hero1.webp" },
          { label: "Non GST Customers", image: "/images/hero1.webp" },
        ].map((item, idx) => (
          <div key={idx} className="space-y-2">
            <Img
              src={item?.image}
              isLocal
              height={250}
              width={250}
              alt="hero"
              className="sm:h-[250px] sm:w-[250px] xxs:h-[200px] xxs:w-[200px] rounded-2xl object-cover"
            />
            <Heading className="text-center text-nowrap sm:text-base xxs:text-xs">
              {item.label}
            </Heading>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

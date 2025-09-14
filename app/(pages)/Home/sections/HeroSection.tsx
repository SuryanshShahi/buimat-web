import Button from "@/app/shared/buttons/Button";
import Divider from "@/app/shared/Divider";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import TextWithLinks from "@/app/shared/heading/TextWithLinks";
import Img from "@/app/shared/Img";

const HeroSection = () => {
  return (
    <div className="lg:grid grid-cols-2 flex flex-col place-items-center justify-between px-5 lg:gap-x-10 gap-y-20">
      <div className="space-y-6 max-w-[525px]">
        <div>
          <Heading
            type="bold"
            className="md:text-[64px] text-[40px] leading-[50px] md:leading-[64px]"
          >
            From Foundation to Finish.
          </Heading>
          <Text className="md:text-2xl" variant="tertiary">
            Bridging India&apos;s Construction Needs.
          </Text>
        </div>
        <div className="flex md:flex-row flex-col itemscenter gap-6">
          <Button btnName="Register to Explore Products" />
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
      <div className="flex sm:flex-row flex-col gap-4 justify-center items-center w-full">
        {[
          { label: "GST-Compliant Customers", image: "/images/hero1.png" },
          { label: "Non GST Customers", image: "/images/hero2.png" },
        ].map((item) => (
          <div key={item.image} className="space-y-2">
            <Img
              src={item?.image}
              isLocal
              height={250}
              width={250}
              alt="hero"
              className="h-[250px] w-[250px]"
            />
            <Heading className="text-center">{item.label}</Heading>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

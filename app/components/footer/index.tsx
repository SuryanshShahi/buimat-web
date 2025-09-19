import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import ListItem from "@/app/shared/ListItem";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const footerLinks = [
    {
      title: "Get Support",
      links: [
        { label: "Help Center", path: "" },
        { label: "Order Status", path: "" },
        { label: "Refunds", path: "" },
      ],
    },
    {
      title: "Sell on BUIMAT",
      links: [
        { label: "Become a Supplier", path: "" },
        { label: "Supplier Verification", path: "" },
        { label: "Partnership", path: "" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "" },
        { label: "Careers", path: "" },
      ],
    },
    {
      title: "Business",
      links: [
        { label: "Return Policy", path: "" },
        { label: "Product Listing Policy", path: "" },
        { label: "Terms of Use", path: "" },
        { label: "Privacy Policy", path: "" },
      ],
    },
    {
      title: "Social Media",
      links: [
        { label: "Facebook", path: "" },
        { label: "Instagram", path: "" },
        { label: "X (Twitter)", path: "" },
      ],
    },
  ];
  return (
    <div className="bg-gray-50 border-t border-t-gray-200">
      <div className="max-w-screen-2xl mx-auto md:grid grid-cols-7 flex flex-wrap py-16 px-5 gap-4">
        <div className="sm:max-w-[206px] max-w-[300px] col-span-2 space-y-4">
          <div
            className="flex items-center gap-x-2"
            onClick={() => router.push("/")}
          >
            <Img
              alt="logo"
              src="/images/icons/logo.png"
              isLocal
              height={30}
              width={30}
              priority
            />
            <Heading className="text-2xl">BUIMAT</Heading>
          </div>
          <Text size="sm">
            Ajin Building Solutions Pvt Ltd 319, Marai Malai Adigal Salai,
            Nellithope Pondicherry 605005
          </Text>
        </div>
        {footerLinks.map((item) => (
          <div className="space-y-2 lg:w-auto w-[120px]" key={item?.title}>
            <Heading className="text-sm">{item.title}</Heading>
            {item.links.map((e) => (
              <ListItem name={e.label} key={e.label} />
            ))}
          </div>
        ))}
      </div>
      <div className="bg-[#22303E] py-2 text-white text-sm text-center">
        © 2024 Buimat - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;

import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PiDotsNineBold, PiShoppingCartFill } from "react-icons/pi";
import SideBar from "../sideBar";
import InputField from "@/app/shared/input/InputField";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import Button from "@/app/shared/buttons/Button";
import PopOver from "@/app/shared/popover";
import {
  IoIosArrowForward,
  IoIosHeart,
  IoMdArrowDropdown,
} from "react-icons/io";
import clsx from "clsx";
import { FiSearch } from "react-icons/fi";
import ListItem from "@/app/shared/ListItem";

const Navbar = () => {
  const router = useRouter();
  useEffect(() => {
    const slideNav = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY >= 100) {
          navbar.classList.add("active");
        } else {
          navbar.classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", slideNav);
    return () => window.removeEventListener("scroll", slideNav);
  }, []);

  const pathname = usePathname();
  const [isActive, setIsActive] = useState("");
  const items = [
    "Wall Tiles",
    "Floor Tiles",
    "Terrace",
    "Elevation",
    "Terrace",
    "Exclusive",
    "Parking / Outdoor",
    "Swimming Pool",
    "Beading & Borders",
    "Flooring Solutions",
    "Adhesives, Grouting & Accessories",
    "Elevation",
  ];
  const menuItems = {
    "Bricks & Blocks": items.slice(4),
    Cement: items,
    "Electrical Materials": items,
    "Natural Stones": items.slice(6),
    "Paints & Finishes": items,
    "Sand & Aggregates": items,
    Tiles: items.slice(2),
    "TMT Steel Bars": items,
    "Wooden Products": items,
    Kitchen: items,
    Bath: items.slice(-4),
  } as const;
  const [selectedCategory, setSelectedCategory] = useState<
    keyof typeof menuItems | ""
  >("");
  return (
    <>
      <div className="bg-header-gradient h-screen absolute inset-0 -z-10" />
      <div className="sticky z-20 p-5 top-0 bg-white border-b" id="navbar">
        <div className="flex items-center relative z-10 justify-between xl:container sm:px-5">
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

          <div className="group">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <PiDotsNineBold size={30} className="text-brand-tertiary" />
              <Text size="sm">Categories</Text>
            </div>
            <div className="h-[calc(100vh-80px)] duration-300 w-screen bg-black/30 group-hover:opacity-100 opacity-0 group-hover:flex hidden absolute -left-5 top-16 justify-center">
              <div className="-mt-8 w-[80%]">
                <div className="h-8 w-full" />
                <div className="grid grid-cols-12 bg-gray-100 h-[calc(100vh-180px)]">
                  <div className="col-span-3 bg-white h-full pt-8">
                    {(
                      Object.keys(menuItems) as Array<keyof typeof menuItems>
                    ).map((item) => (
                      <div
                        key={item}
                        onMouseOver={() => setSelectedCategory(item)}
                        className={clsx(
                          "text-sm p-3 border-l-4 border-transparent cursor-pointer duration-300 flex justify-between items-center",
                          item === selectedCategory &&
                            "bg-gray-100 !border-brand"
                        )}
                      >
                        {item}
                        {item === selectedCategory && (
                          <IoIosArrowForward
                            className="text-secondary"
                            size={20}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="col-span-9 p-8 space-y-3 group">
                    {selectedCategory &&
                      (
                        menuItems[selectedCategory as keyof typeof menuItems] ||
                        []
                      ).map((item: string, index: number) => (
                        <ListItem
                          name={item}
                          styleText="!text-black"
                          key={index}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <InputField
            placeholder="Search by category, brand or supplier"
            className="w-[450px]"
            icon={<FiSearch size={20} className="text-secondary" />}
          />
          <div className="relative">
            <Button
              icon={
                <FaLocationDot
                  className="text-brand-tertiary order-first"
                  size={20}
                />
              }
              btnName="Gurugram"
              size="sm"
              variant="tertiary-link"
              className="!p-0 cursor-pointer"
              secondaryIcon={
                <IoMdArrowDropdown
                  className={clsx(
                    "text-xl duration-300",
                    isActive === "SELECT_LOCATION" && "-rotate-180"
                  )}
                />
              }
              onClick={() => setIsActive(isActive ? "" : "SELECT_LOCATION")}
            />
            {isActive === "SELECT_LOCATION" && (
              <PopOver
                close={() => setIsActive("")}
                className="w-full"
                menuItems={[
                  {
                    id: "",
                    text: "Delhi",
                    onClick: () => {},
                  },
                  {
                    id: "",
                    text: "Lucknow",
                    onClick: () => {},
                  },
                  {
                    id: "",
                    text: "Pune",
                    onClick: () => {},
                  },
                ]}
              />
            )}
          </div>
          <div className="flex items-center text-2xl gap-x-10 [&>*]:cursor-pointer">
            <IoIosHeart />
            <PiShoppingCartFill />
            <FaUser />
          </div>
        </div>
      </div>
      {isActive === "SIDEBAR" && <SideBar />}
    </>
  );
};

export default Navbar;

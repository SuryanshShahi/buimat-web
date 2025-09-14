import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import Img from "@/app/shared/Img";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PiDotsNineBold } from "react-icons/pi";
import SideBar from "../sideBar";

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
          <div className="flex gap-x-8 items-center">
            <div className="flex items-center gap-x-2">
              <PiDotsNineBold size={30} className="text-brand-tertiary" />
              <Text size="sm">Categories</Text>
            </div>
          </div>
        </div>
      </div>
      {isActive === "SIDEBAR" && <SideBar />}
    </>
  );
};

export default Navbar;

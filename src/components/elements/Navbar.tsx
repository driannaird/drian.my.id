import Image from "next/image";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/contexts/globalContext";
import NavbarMobile from "./partials/NavbarMobile";
import NavbarDekstop from "./partials/NavbarDekstop";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const { toggle, setToggle } = useGlobalContext();

  const controlNavbar = () => {
    if (window.scrollY > 52) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          show &&
          "fixed top-0 left-0 right-0 backdrop-filter backdrop-blur-sm bg-opacity-80 rounded-none lg:sticky lg:bg-opacity-100 lg:backdrop-filter-none lg:backdrop-blur-0 lg:rounded-lg"
        } text-gray-300 bg-slate-me p-3 rounded-lg border border-border-me transition duration-200 lg:h-[calc(100vh-3rem)] md:px-5 md:py-5`}>
        <div className="flex w-full justify-between items-center relative z-50 lg:py-5 lg:flex-col lg:items-start lg:gap-4">
          <Image
            className="hidden rounded-full lg:block"
            src="/images/me.jpg"
            width="100"
            height="100"
            alt="me"
          />

          <span className="text-sm font-bold md:text-lg lg:text-xl">
            @driannaird
          </span>

          <button
            onClick={() => setToggle(!toggle)}
            className="bg-bg-partial p-2 rounded-lg border  border-border-me transition-all duration-300 ease-in-out hover:bg-slate-me cursor-pointer lg:hidden">
            <Image src="/hamburger.svg" alt="ham" width={25} height={25} />
          </button>
        </div>
        <div className="lg:hidden">
          <NavbarMobile />
        </div>
        <div className="hidden lg:block">
          <NavbarDekstop />
        </div>
      </div>
      <div className={`${show && "h-16 lg:hidden"}`}></div>
    </>
  );
};

export default Navbar;

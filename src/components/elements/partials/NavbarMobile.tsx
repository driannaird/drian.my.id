import { useGlobalContext } from "@/contexts/globalContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

const NavbarMobile = () => {
  const router = useRouter();

  const { toggle, setToggle } = useGlobalContext();

  const Navigate = (path: string) => {
    router.push(path);
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <motion.div
          initial={{ y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}>
          <ul className="text-sm flex flex-col gap-3 mt-3 md:text-base">
            <li
              onClick={() => Navigate("/")}
              className="bg-bg-partial p-3 rounded-md flex items-center gap-3 border border-slate-me transition-all duration-300 ease-in-out hover:bg-slate-me cursor-pointer">
              <Image src="/menus/home.svg" alt="home" width={25} height={25} />
              <span>Home</span>
            </li>
            <li
              onClick={() => Navigate("/about")}
              className="bg-bg-partial p-3 rounded-md flex items-center gap-3 border border-slate-me transition-all duration-300 ease-in-out hover:bg-slate-me cursor-pointer">
              <Image
                src="/menus/about.svg"
                alt="about"
                width={25}
                height={25}
              />
              <span>About</span>
            </li>
            <li className="bg-bg-partial p-3 rounded-md flex items-center gap-3 border border-slate-me transition-all duration-300 ease-in-out hover:bg-slate-me cursor-pointer">
              <Image
                src="/menus/project.svg"
                alt="project"
                width={25}
                height={25}
              />
              <span>Project</span>
            </li>
            <li className="bg-bg-partial p-3 rounded-md flex items-center gap-3 border border-slate-me transition-all duration-300 ease-in-out hover:bg-slate-me cursor-pointer">
              <Image
                src="/menus/contact.svg"
                alt="contact"
                width={25}
                height={25}
              />
              <span>Contact</span>
            </li>
            <li className="bg-bg-partial p-3 rounded-md flex items-center gap-3 border border-slate-me transition-all duration-300 ease-in-out hover:bg-slate-me cursor-pointer">
              <Image
                src="/menus/rocket.svg"
                alt="rocket"
                width={25}
                height={25}
              />
              <span>Rocket</span>
            </li>
          </ul>
        </motion.div>
      ) : null}
    </>
  );
};

export default NavbarMobile;

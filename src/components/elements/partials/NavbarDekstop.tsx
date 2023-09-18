import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarDekstop = () => {
  const { pathname } = useRouter();

  const links = [
    { path: "/", icon: "home.svg", label: "Home" },
    { path: "/about", icon: "about.svg", label: "About" },
    { path: "/projects", icon: "project.svg", label: "Projects" },
    { path: "/contact", icon: "contact.svg", label: "Contact" },
    { path: "/rocket", icon: "rocket.svg", label: "Rocket" },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}>
        <ul className="text-sm flex flex-col gap-1 mt-3 lg:text-xl">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`p-3 flex items-center gap-3 transition-all duration-300 ease-in-out cursor-pointer rounded-lg ${
                pathname === link.path
                  ? "bg-slate-me"
                  : "hover:bg-bg-partial hover:scale-105"
              }`}>
              <Image
                src={`/menus/${link.icon}`}
                alt={link.label}
                width={25}
                height={25}
                className="w-auto h-auto"
              />
              <span>{link.label}</span>
            </Link>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default NavbarDekstop;

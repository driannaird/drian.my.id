import Image from "next/image";
import Link from "next/link";

const WorkTogetherSection = () => {
  return (
    <section className="bg-bg-partial p-8 mt-3 rounded-md lg:m-5">
      <div className="flex gap-1 items-center text-lg mb-3 md:gap-2">
        <Image src="/icons/work.svg" width={25} height={25} alt="work" />
        <h2 className="font-bold md:text-lg">Let`s work together!</h2>
      </div>
      <p className="text-gray-300 md:text-lg">
        Even though I have a full-time job as a Web Programmer, I am very
        willing to use my free time to collaborate with anyone.
      </p>
      <div className="mt-4">
        <Link href="/contact">
          <button className="hover:scale-105 bg-gradient-to-r from-unggu-is to-pink-is py-2 px-4 rounded-md border border-slate-me flex justify-center items-center gap-1 text-base transition-all duration-300 ease-in-out hover:opacity-80 md:text-lg">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WorkTogetherSection;

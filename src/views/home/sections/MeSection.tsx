import Image from "next/image";

const MeSection = () => {
  return (
    <section
      data-aos="fade-up"
      className="flex flex-col justify-center p-3 border rounded-md bg-bg-partial border-slate-me md:p-8 lg:mx-5 lg:border-none">
      <div className="w-full pb-3 my-3 border-b border-slate-me md:pb-5 lg:flex lg:items-center lg:justify-between ">
        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4">
          <Image
            className="rounded-full lg:hidden"
            src="/images/me.jpg"
            width="100"
            height="100"
            alt="me"
          />
          <div className="text-center md:text-start">
            <h4 className="mt-4 text-xl font-medium text-text-color xl:text-2xl">
              Front-end Developer
            </h4>
            <h1 className="text-2xl font-bold xl:text-4xl">
              Hi, I am Riski Drian Pratama
            </h1>
          </div>
        </div>
        <div className="flex mt-4 justify-evenly md:justify-start md:gap-6">
          <a
            className="transition-all duration-300 ease-in-out border rounded-md border-slate-me hover:opacity-80 hover:scale-125"
            href="https://www.instagram.com/driannaird/"
            target="_blank">
            <Image src="/icons/instagram.svg" width="40" height="40" alt="ig" />
          </a>
          <a
            className="transition-all duration-300 ease-in-out border rounded-md border-slate-me hover:opacity-80 hover:scale-110"
            href="https://www.youtube.com/@driannaird"
            target="_blank">
            <Image
              src="/icons/youtube.svg"
              width="40"
              height="40"
              alt="youtube"
            />
          </a>
          <a
            className="transition-all duration-300 ease-in-out border rounded-md border-slate-me hover:opacity-80 hover:scale-125"
            href="https://www.tiktok.com/@driannaird"
            target="_blank">
            <Image
              src="/icons/tiktok.svg"
              width="40"
              height="40"
              alt="tiktok"
            />
          </a>
          <a
            className="transition-all duration-300 ease-in-out border rounded-md border-slate-me hover:scale-125 hover:opacity-80"
            href="https://github.com/Drian-key"
            target="_blank">
            <Image
              src="/icons/github.svg"
              width="40"
              height="40"
              alt="github"
            />
          </a>
        </div>
      </div>
      <div className="w-full pb-3 mb-3 text-base text-center border-b border-slate-me md:text-lg md:text-start">
        <div className="mb-3">
          <span className="font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-is bg-clip-text lg:text-xl">
            #front-end #20yearsold
          </span>
        </div>
        <h3 className="text-gray-300 md:text-lg">
          Full time front end developer. Deep dive into JavaScript and its
          environment.
        </h3>
      </div>
      <div>
        <button className="flex items-center justify-center w-full gap-1 py-2 text-base transition-all duration-300 ease-in-out border rounded-md bg-gradient-to-r from-unggu-is to-pink-is border-slate-me hover:scale-105 hover:opacity-80 md:w-auto md:px-4 md:text-lg">
          <Image src="/icons/unduh.svg" width={25} height={25} alt="unduh" />
          Download CV (Soon)
        </button>
      </div>
    </section>
  );
};

export default MeSection;

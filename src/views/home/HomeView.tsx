import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";

import "swiper/css";
import Link from "next/link";

const HomeView = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="lg:bg-slate-me lg:border lg:border-border-me lg:rounded-lg">
      <div className="hidden mb-5 text-center bg-gradient-to-r from-unggu-is to-pink-is rounded-t-lg lg:block">
        <p className="text-white text-lg py-1 md:text-lg">
          Hi, welcome to my portfolio
        </p>
      </div>
      <section
        data-aos="fade-up"
        className="bg-bg-partial border border-border-me rounded-lg p-3 flex flex-col justify-center md:p-8 lg:mx-5">
        <div className="border-b w-full border-border-me pb-3 my-3 md:pb-5 lg:flex lg:items-center lg:justify-between ">
          <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4">
            <Image
              className="rounded-full lg:hidden"
              src="/images/me.jpg"
              width="100"
              height="100"
              alt="me"
            />
            <div className="text-center md:text-start">
              <h4 className="text-xl text-text-color font-medium mt-4 xl:text-2xl">
                Front-end Developer
              </h4>
              <h1 className="text-2xl font-bold xl:text-4xl">
                Hi i`am Riski Drian Pratama
              </h1>
            </div>
          </div>
          <div className="flex justify-evenly mt-4 md:justify-start md:gap-6">
            <a
              className="rounded-lg border border-border-me hover:opacity-80"
              href="https://www.instagram.com/driannaird/"
              target="_blank">
              <Image
                src="/icons/instagram.svg"
                width="40"
                height="40"
                alt="ig"
              />
            </a>
            <a
              className="rounded-lg border border-border-me hover:opacity-80"
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
              className="rounded-lg border border-border-me hover:opacity-80"
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
              className="rounded-lg border border-border-me hover:opacity-80"
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
        <div className="text-center text-base border-b w-full border-border-me pb-3 mb-3 md:text-lg md:text-start">
          <div className="mb-3">
            <span className="bg-gradient-to-r from-purple-500 to-pink-is text-transparent bg-clip-text font-bold lg:text-xl">
              #front-end #18years-old
            </span>
          </div>
          <h3 className="text-gray-300 md:text-lg">
            Hai saya Riski Drian Pratama, seorang Web Programmer full time di
            rumah sakit. Saya memiliki minat yang tinggi terhadap front end
            developer. Saat ini saya sedang mendalami React JS dan Tailwind CSS.
          </h3>
        </div>
        <div>
          <button className="bg-gradient-to-r from-unggu-is to-pink-is w-full py-2 rounded-lg border border-border-me flex justify-center items-center gap-1 text-base transition-all duration-300 ease-in-out hover:opacity-80 md:w-auto md:px-4 md:text-lg">
            <Image src="/icons/unduh.svg" width={25} height={25} alt="unduh" />
            Unduh CV
          </button>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="border border-border-me p-3 mt-3 rounded-lg relative md:p-8 lg:m-5">
        <div className="flex justify-between border-b border-border-me pb-3 mb-3 md:pb-8 md:mb-8">
          <h3 className="md:text-lg lg:text-2xl">Project terbaru</h3>
          <Link
            className="flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-is text-transparent font-bold text-sm bg-clip-text hover:opacity-80 md:text-lg"
            href="/project">
            Lihat semua project{" "}
            <Image
              src="/icons/right-arrow.svg"
              width={20}
              height={20}
              alt="arrow right"
            />
          </Link>
        </div>
        <Swiper
          className="relative"
          slidesPerView={1.1}
          breakpoints={{
            640: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
          }}
          spaceBetween={15}>
          <SwiperSlide className="rounded-lg overflow-hidden ">
            <div className="bg-gradient-to-br from-unggu-is to-pink-is h-56"></div>
            <div className="bg-bg-partial p-4 md:py-8 md:px-5">
              <h2 className="text-lg mb-2 font-bold md:text-xl">
                Lompace Travel
              </h2>
              <p className="text-gray-300 md:text-lg">
                Personal landing page built with Next.js 13 App Router,
                TypeScript and Tailwind CSS.
              </p>
              <div className="mt-4 flex gap-2">
                <Image src="/icons/ts.svg" width={25} height={25} alt="ts" />
                <Image src="/icons/react.svg" width={25} height={25} alt="ts" />
                <Image src="/icons/next.svg" width={25} height={25} alt="ts" />
                <Image
                  src="/icons/tailwind.svg"
                  width={25}
                  height={25}
                  alt="ts"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg overflow-hidden">
            <div className="bg-gradient-to-br from-unggu-is to-pink-is h-56"></div>
            <div className="bg-bg-partial p-4 md:py-8 md:px-5">
              <h2 className="text-lg mb-2 font-bold md:text-xl">
                Lompace Travel
              </h2>
              <p className="text-gray-300 md:text-lg">
                Personal landing page built with Next.js 13 App Router,
                TypeScript and Tailwind CSS.
              </p>
              <div className="mt-4 flex gap-2">
                <Image src="/icons/ts.svg" width={25} height={25} alt="ts" />
                <Image src="/icons/react.svg" width={25} height={25} alt="ts" />
                <Image src="/icons/next.svg" width={25} height={25} alt="ts" />
                <Image
                  src="/icons/tailwind.svg"
                  width={25}
                  height={25}
                  alt="ts"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg overflow-hidden">
            <div className="bg-gradient-to-br from-unggu-is to-pink-is h-56"></div>
            <div className="bg-bg-partial p-4 md:py-8 md:px-5">
              <h2 className="text-lg mb-2 font-bold md:text-xl">
                Lompace Travel
              </h2>
              <p className="text-gray-300 md:text-lg">
                Personal landing page built with Next.js 13 App Router,
                TypeScript and Tailwind CSS.
              </p>
              <div className="mt-4 flex gap-2">
                <Image src="/icons/ts.svg" width={25} height={25} alt="ts" />
                <Image src="/icons/react.svg" width={25} height={25} alt="ts" />
                <Image src="/icons/next.svg" width={25} height={25} alt="ts" />
                <Image
                  src="/icons/tailwind.svg"
                  width={25}
                  height={25}
                  alt="ts"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="bg-bg-partial p-8 mt-3 rounded-lg lg:m-5">
        <div className="flex gap-1 items-center text-lg mb-3 md:gap-2">
          <Image src="/icons/work.svg" width={25} height={25} alt="work" />
          <h2 className="font-bold md:text-lg">Mari berkerja sama!</h2>
        </div>
        <p className="text-gray-300 md:text-lg">
          Meskipun saya memiliki kesibukan sebagai Web Programmer Full Time
          tetapi saya sangat bersedia untuk menggunakan waktu luang saya untuk
          berkerja sama dengan siapapun.
        </p>
        <div className="mt-4">
          <button className="bg-gradient-to-r from-unggu-is to-pink-is py-2 px-4 rounded-lg border border-border-me flex justify-center items-center gap-1 text-base transition-all duration-300 ease-in-out hover:opacity-80 md:text-lg">
            Hubungi Saya
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeView;

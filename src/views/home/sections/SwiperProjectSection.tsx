import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const SwiperProjectSection = () => {
  return (
    <section
      data-aos="fade-up"
      className="border border-border-me p-3 mt-3 rounded-md relative md:p-8 lg:m-5">
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
        <SwiperSlide className="rounded-md overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dhnjuuy2e/image/upload/v1694835790/projects/lompace.vercel.app__Responsive_Project_camo5b.png"
            width="1000"
            height="1000"
            alt=""
          />

          <div className="bg-bg-partial p-4 md:py-8 md:px-5">
            <h2 className="text-lg mb-2 font-bold md:text-xl">
              Lompace Travel
            </h2>
            <p className="text-gray-300 md:text-lg">
              Personal landing page built with Next.js 13 App Router, TypeScript
              and Tailwind CSS.
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
        <SwiperSlide className="rounded-md overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dhnjuuy2e/image/upload/v1694835790/projects/lompace.vercel.app__Responsive_Project_camo5b.png"
            width="1000"
            height="1000"
            alt=""
          />

          <div className="bg-bg-partial p-4 md:py-8 md:px-5">
            <h2 className="text-lg mb-2 font-bold md:text-xl">
              Lompace Travel
            </h2>
            <p className="text-gray-300 md:text-lg">
              Personal landing page built with Next.js 13 App Router, TypeScript
              and Tailwind CSS.
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
        <SwiperSlide className="rounded-md overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dhnjuuy2e/image/upload/v1694835964/projects/localhost_3000__Responsive_Project_q9sepp.png"
            width="1000"
            height="1000"
            alt=""
          />
          <div className="bg-bg-partial p-4 md:py-8 md:px-5">
            <h2 className="text-lg mb-2 font-bold md:text-xl">
              Lompace Travel
            </h2>
            <p className="text-gray-300 md:text-lg">
              Personal landing page built with Next.js 13 App Router, TypeScript
              and Tailwind CSS.
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
  );
};

export default SwiperProjectSection;

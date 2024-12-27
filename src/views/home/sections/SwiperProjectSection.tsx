import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import axios from "axios";
import { ProjectsType } from "@/types/ProjectsTypes";

type TechType = {
  slug: string;
};

const SwiperProjectSection = ({ projects }: { projects: ProjectsType }) => {
  return (
    <section
      data-aos="fade-up"
      className="relative p-3 mt-3 border rounded-md border-slate-me md:p-8 lg:m-5">
      <div className="flex justify-between pb-3 mb-3 border-b border-slate-me md:pb-8 md:mb-8">
        <h3 className="md:text-lg lg:text-2xl">New Project</h3>
        <Link
          className="flex items-center gap-1 text-sm font-bold text-transparent transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-500 to-pink-is bg-clip-text hover:opacity-80 md:text-lg hover:scale-105"
          href="/projects">
          See all projects
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
        {projects.map((project: ProjectsType, index: number) => (
          <SwiperSlide
            key={index}
            className="overflow-hidden rounded-md cursor-pointer group">
            <Link href={project.url} target="_blank">
              <Image
                src={project.image}
                width="500"
                height="500"
                priority
                alt=""
                className="transition-all duration-300 ease-in-out group-hover:scale-105"
              />

              <div className="p-4 transition-all duration-300 ease-in-out bg-bg-partial md:py-8 md:px-5 group-hover:scale-105">
                <h2 className="mb-2 text-lg font-bold md:text-xl">
                  {project.title}
                </h2>
                <p className="text-gray-300 md:text-lg">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-4">
                  {project.techs.map((tech: TechType, index: number) => (
                    <Image
                      key={index}
                      src={`/icons/${tech.slug}.svg`}
                      width={25}
                      height={25}
                      alt="ts"
                    />
                  ))}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperProjectSection;

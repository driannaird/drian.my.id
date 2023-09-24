import { ProjectsType } from "@/types/ProjectsTypes";
import Image from "next/image";
import Link from "next/link";

type TechType = {
  slug: string;
};

const ProjectView = ({ projects }: { projects: ProjectsType }) => {
  return (
    <>
      <div className="text-gray-300 min-h-[calc(100vh-3rem)] lg:border lg:border-slate-me lg:rounded-md lg:text-lg lg:tracking-wide leading-relaxed text-justify">
        <section
          data-aos="fade-up"
          className="bg-bg-partial border border-slate-me rounded-md p-3 flex flex-col justify-center md:p-8 lg:m-5 lg:border-none">
          <h1 className="font-bold text-3xl">My Project</h1>
        </section>
        <section className="border border-slate-me rounded-md p-2 mt-4 lg:m-5">
          <div className="flex flex-wrap">
            {projects.map((project, index) => (
              <div key={index} className="w-full md:w-1/2 p-2 lg:p-3">
                <div className="rounded-md overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 gap-2">
                  <Link href={project.url} target="_blank">
                    <Image
                      src={project.image}
                      width="500"
                      height="500"
                      priority
                      alt=""
                      className="w-full h-auto transition-all duration-300 ease-in-out group-hover:scale-105"
                    />

                    <div className="bg-bg-partial p-4 md:py-8 md:px-5 transition-all duration-300 ease-in-out group-hover:scale-105">
                      <h2 className="text-lg mb-2 font-bold md:text-xl">
                        {project.title}
                      </h2>
                      <p className="text-gray-300 md:text-lg">
                        {project.description}
                      </p>
                      <div className="mt-4 flex gap-2">
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
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectView;

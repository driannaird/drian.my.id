import Image from "next/image";
import Link from "next/link";

const AboutView = () => {
  return (
    <div className="text-gray-300 min-h-[calc(100vh-3rem)] lg:border lg:border-slate-me lg:rounded-md lg:text-lg indent-8 lg:tracking-wide leading-relaxed text-justify">
      <section
        data-aos="fade-up"
        className="bg-bg-partial border border-slate-me rounded-md p-3 flex flex-col justify-center md:p-8 lg:m-5 lg:border-none">
        <h1 className="text-center font-bold text-3xl mb-3">About Me</h1>
        <div className="w-full flex justify-center mb-2">
          <Image
            src="/images/aboutme.jpg"
            width={400}
            height={400}
            priority
            className="rounded-xl"
            alt="me"
          />
        </div>
        <p>
          Hello! I{"'"}m{" "}
          <span className="underline decoration-2 font-bold decoration-sky-500">
            Drian
          </span>{" "}
          also known me{" "}
          <span className="underline decoration-2 font-bold decoration-sky-500">
            Drian Tcho.
          </span>{" "}
          Thank you for visiting my{" "}
          <span className="underline decoration-2 font-bold decoration-sky-500">
            profile.
          </span>{" "}
          I am a{" "}
          <span className="underline decoration-2 font-bold decoration-sky-500">
            Programmer
          </span>{" "}
          with a strong interest in{" "}
          <span className="underline decoration-2 font-bold decoration-sky-500">
            front-end dev.
          </span>{" "}
          Currently pursuing a bachelor{"'"}s degree in{" "}
          <span className="underline decoration-2 font-bold decoration-sky-500">
            Information Systems
          </span>{" "}
          online at{" "}
          <span className="underline decoration-2 font-bold decoration-sky-500">
            Universitas Terbuka.
          </span>{" "}
          Additionally, I work{" "}
          <span className="underline decoration-2 font-bold decoration-sky-500">
            full-time as a software engineer at a hospital.
          </span>{" "}
        </p>
        <p>
          Passionate about crafting pixels and lines of code. I{" "}
          <span className="underline decoration-2 font-bold decoration-sky-500">
            specialize in JavaScript
          </span>{" "}
          and am currently exploring the realms of{" "}
          <span className="underline decoration-2 font-bold decoration-sky-500">
            React Js and Tailwind CSS
          </span>{" "}
          . I am dedicated to honing my programming skills every day. Outside of
          work, I thoroughly enjoy hobbies such as watching movies and reading
          books. I also have a love for music, which helps me stay balanced and
          creative in my daily life. One of my primary goals is to become a{" "}
          <span className="underline decoration-2 font-bold decoration-sky-500">
            professional front-end developer.
          </span>{" "}
        </p>
        <p>
          I believe that my efforts and consistency in learning will not go in
          vain. I am delighted to connect with new people and share experiences.
          If you
          {"'"}d like to get in touch with me, please don
          {"'"}t hesitate to reach out. <br />
          <Link href="/contact">
            <span className="underline decoration-2 font-bold decoration-pink-500 transition-all duration-300 ease-in-out hover:bg-pink-500">
              Click here to contact me
            </span>
          </Link>
        </p>
      </section>
    </div>
  );
};

export default AboutView;

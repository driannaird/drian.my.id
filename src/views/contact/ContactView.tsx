import Image from "next/image";
import Link from "next/link";

const ContactView = () => {
  return (
    <div className="text-gray-300 min-h-[calc(100vh-3rem)] lg:border lg:border-slate-me lg:rounded-md lg:text-lg lg:tracking-wide leading-relaxed text-justify">
      <section
        data-aos="fade-up"
        className="bg-bg-partial border border-slate-me rounded-md p-3 flex flex-col justify-center md:p-8 lg:m-5 lg:border-none">
        <h1 className="font-bold text-3xl">Contact Me</h1>
      </section>
      <section
        data-aos="fade-up"
        className="border border-slate-me rounded-md p-3 flex flex-col justify-center md:p-8 mt-4 lg:m-5">
        <p className="font-bold">You can contact me via:</p>
        <div className="flex flex-col gap-4 mt-2 md:flex-row">
          <Link
            className="flex w-full rounded-md items-center gap-2 bg-red-500"
            href="mailto:riskidrian1@gmail.com"
            target="_blank">
            <Image
              src="/icons/email.svg"
              alt="menu"
              width={25}
              height={25}
              className="w-auto h-auto scale-90"
            />
            <span>riskidrian1@gmail.com</span>
          </Link>
          <Link
            href="https://www.instagram.com/driannaird/"
            target="_blank"
            className="flex w-full rounded-md items-center gap-2 bg-gradient-to-br from-unggu-is to-pink-is">
            <Image
              src="/icons/instagram.svg"
              alt="menu"
              width={25}
              height={25}
              className="w-auto h-auto"
            />
            <span>@driannaird</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactView;

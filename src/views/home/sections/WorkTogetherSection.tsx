import Image from "next/image";

const WorkTogetherSection = () => {
  return (
    <section className="bg-bg-partial p-8 mt-3 rounded-md lg:m-5">
      <div className="flex gap-1 items-center text-lg mb-3 md:gap-2">
        <Image src="/icons/work.svg" width={25} height={25} alt="work" />
        <h2 className="font-bold md:text-lg">Mari berkerja sama!</h2>
      </div>
      <p className="text-gray-300 md:text-lg">
        Meskipun saya memiliki kesibukan sebagai Web Programmer Full Time tetapi
        saya sangat bersedia untuk menggunakan waktu luang saya untuk berkerja
        sama dengan siapapun.
      </p>
      <div className="mt-4">
        <button className="bg-gradient-to-r from-unggu-is to-pink-is py-2 px-4 rounded-md border border-slate-me flex justify-center items-center gap-1 text-base transition-all duration-300 ease-in-out hover:opacity-80 md:text-lg">
          Hubungi Saya
        </button>
      </div>
    </section>
  );
};

export default WorkTogetherSection;

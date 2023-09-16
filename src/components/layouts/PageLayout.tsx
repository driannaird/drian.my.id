import Navbar from "../elements/Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-3 lg:px-16 lg:py-8">
      <div className="container mx-auto bg-gradient-to-br from-slate-gradient-one to-black rounded-lg border border-border-me lg:grid lg:grid-cols-5 lg:bg-none lg:border-none lg:gap-2">
        <div className="mb-3 text-center bg-gradient-to-r from-unggu-is to-pink-is rounded-t-lg lg:hidden">
          <p className="text-white text-sm py-1 md:text-base">
            Hi, welcome to my portfolio
          </p>
        </div>
        <header className="m-3 lg:col-span-1 lg:m-0 transition-all duration-300 ease-in-out relative z-50">
          <Navbar />
        </header>
        <main className="m-3 text-white lg:col-span-4 lg:mt-0 transition-all duration-300 ease-in-out">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;

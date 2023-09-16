import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MeSection from "./sections/MeSection";
import SwiperProjectSection from "./sections/SwiperProjectSection";
import WorkTogetherSection from "./sections/WorkTogetherSection";
import WelcomeSection from "./sections/WelcomeSection";

const HomeView = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="lg:border lg:border-border-me lg:rounded-md">
      <WelcomeSection />
      <MeSection />
      <SwiperProjectSection />
      <WorkTogetherSection />
    </div>
  );
};

export default HomeView;

import MeSection from "./sections/MeSection";
import SwiperProjectSection from "./sections/SwiperProjectSection";
import WorkTogetherSection from "./sections/WorkTogetherSection";
import WelcomeSection from "./sections/WelcomeSection";
import { ProjectsType } from "@/types/ProjectsTypes";

const HomeView = ({ projects }: { projects: ProjectsType }) => {
  return (
    <div className="lg:border lg:border-slate-me lg:rounded-md tracking-wide leading-relaxed">
      <WelcomeSection />
      <MeSection />
      <SwiperProjectSection projects={projects} />
      <WorkTogetherSection />
    </div>
  );
};

export default HomeView;

export type ProjectsType = {
  map(
    arg0: (project: ProjectsType, index: number) => import("react").JSX.Element
  ): import("react").ReactNode;
  title: string;
  description: string;
  url: string;
  image: string;
  techs: any;
};

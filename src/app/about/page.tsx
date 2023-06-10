import AboutAuthor from "@/components/AboutAuthor";
import { AboutCaption } from "@/components/AboutCaption";
import { FC } from "react";

export const metadata = {
  title: "Dinviz | About",
  description: "Discribes autor",
};

const About: FC = () => {
  return (
    <>
      <AboutCaption>Passion Fuels Purpose!</AboutCaption>
      <AboutAuthor/>
    </>
  );
};

export default About;

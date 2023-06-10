import { FC } from "react";
import Bulb from "@/ui/Bulb";
import Overview from "@/components/Overview";
import AuthorCard from "@/components/AuthorCard";

export const metadata = {
  title: "Dinviz | Portfolio",
  description: "Interesting portfolio with cool design",
};

const Home: FC = () => {
  return (
    <>
      <Overview />
      <Bulb />
    </>
  );
};

export default Home;

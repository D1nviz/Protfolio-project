import Bulb from "@/components/Bulb";
import Overview from "@/components/Overview";

export const metadata = {
  title: "Dinviz | Portfolio",
  description: "Interesting portfolio with cool design",
};

const Home = () => {
  return (
    <>
      <Overview />
      <Bulb />
    </>
  );
};

export default Home;

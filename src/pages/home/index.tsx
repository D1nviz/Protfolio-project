import Bulb from "@/components/Bulb";
import Header from "@/components/Header";
import Overview from "@/components/Overview";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Overview />
        <Bulb/>
      </main>
    </>
  );
};

export default Home;

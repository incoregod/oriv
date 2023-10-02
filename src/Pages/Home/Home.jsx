import About from "./SubHome/About/About";
import Carou from "./SubHome/Carou";
import Header from "./SubHome/Header";
import LatestProducts from "./SubHome/LatestProducts";
import Personalizar from "./SubHome/Personalizar";
import TopProducts from "./SubHome/TopProducts";
import { Parallax } from "react-scroll-parallax";

const Home = () => {
  return (
    <div className="bg-white">
      <header>
        <Header />
      </header>
      <section className="bg-white py-10 md:px-10 px-5 2xl:py-20">
        <Parallax translateY={[-10, 10]} speed={10}>
          <About />
        </Parallax>
      </section>
      <section className="py-10 px-5 md:px-10 lg:p-20 bg-white">
        <Parallax translateY={[10, 0]}>
          <Carou />
        </Parallax>
      </section>
      <main className="py-10 lg:py-20 bg-gradient-to-b from-white via-orange-50  to-orange-50  ">
        <Parallax translateY={[10, -20]}>
          <Personalizar />
        </Parallax>
      </main>
      <section className="py-10 px-5 md:px-10 lg:p-20 bg-gradient-to-b from-orange-50 via-orange-50  to-white">
        <Parallax translateY={[0, -10]}>
          <TopProducts />
        </Parallax>
      </section>
      <section className="py-10 px-5 md:px-10 lg:p-20 bg-white lg:text-left text-center">
        <LatestProducts />
      </section>
    </div>
  );
};

export default Home;

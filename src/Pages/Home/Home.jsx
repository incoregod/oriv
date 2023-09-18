import About from "./SubHome/About/About";
import Carou from "./SubHome/Carou";
import Header from "./SubHome/Header";
import LatestProducts from "./SubHome/LatestProducts";
import Personalizar from "./SubHome/Personalizar";
import TopProducts from "./SubHome/TopProducts";

const Home = () => {
  return (
    <div className="bg-white">
      <header>
        <Header />
      </header>
      <section className="bg-white py-10 md:px-10 px-5 2xl:py-20">
        <About />
      </section>
      <section className="py-10 px-5 md:px-10 lg:p-20 bg-white">
        <Carou />
      </section>
      <main className="py-10 lg:py-20 bg-gradient-to-b from-white via-orange-50  to-orange-50  ">
        <Personalizar />
      </main>
      <section className="py-10 px-5 md:px-10 lg:p-20 bg-gradient-to-b from-orange-50 via-orange-50  to-white">
        <TopProducts />
      </section>
      <section className="py-10 px-5 md:px-10 lg:p-20 bg-white lg:text-left text-center">
        <LatestProducts />
      </section>
    </div>
  );
};

export default Home;

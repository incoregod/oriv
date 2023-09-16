import About from "./SubHome/About/About";
import Carou from "./SubHome/Carou";
import Header from "./SubHome/Header";
import Purpose from "./SubHome/Purpose";
import TopProducts from "./SubHome/TopProducts";

const Home = () => {
  return (
    <div className="bg-red-200">
      <header>
        <Header />
      </header>
      <section className="bg-white py-10 px-5 md:py-10 2xl:py-20">
        <About />
      </section>
      <section className="p-5 md:px-10 lg:p-20 bg-white">
        <Carou />
      </section>
      <main>
        <Purpose />
      </main>
      <section>
        <TopProducts />
      </section>
    </div>
  );
};

export default Home;

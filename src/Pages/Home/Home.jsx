import About from "./SubHome/About";
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
      <section className="bg-white">
        <About />
      </section>
      <section>
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

import About from "./SubHome/About";
import Carou from "./SubHome/Carou";
import Header from "./SubHome/Header";
import Purpose from "./SubHome/Purpose";
import TopProducts from "./SubHome/TopProducts";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
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

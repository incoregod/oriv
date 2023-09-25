import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";

const FooterSocials = () => {
  return (
    <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-evenly">
      <div className="mr-12 hidden lg:block">
        <span>Juntar-se às nossas redes sociais:</span>
      </div>

      <div className="flex justify-center">
        <a
          href="https://www.facebook.com/atelier.caroline.borges/"
          rel="noreferrer"
          target="_blank"
          className="mr-6 text-neutral-600 dark:text-neutral-200"
        >
          <BsFacebook />
        </a>

        <a
          href="https://www.facebook.com/atelier.caroline.borges/"
          rel="noreferrer"
          target="_blank"
          className="mr-6 text-neutral-600 dark:text-neutral-200"
        >
          <BsInstagram />
        </a>

        <a
          href="https://www.facebook.com/atelier.caroline.borges/"
          rel="noreferrer"
          target="_blank"
          className="mr-6 text-neutral-600 dark:text-neutral-200"
        >
          <BsPinterest />
        </a>
      </div>
    </div>
  );
};

export default FooterSocials;

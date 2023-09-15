const SwiperTexts = ({ text, styles }) => {
  return (
    <div className={styles}>
      <h1 className="text-3xl flex-wrap sm:text-4xl ">{text.header}</h1>
      <p className=" text-md ">{text.content}</p>
      <button className="mt-5   px-6 py-1 sm:px-8 sm:py-2 border-white border-2 hover:scale-110 hover:bg-black hover:border-gray-800 transition-all ease-in-out duration-300 sm:text-xl">
        {text.button}
      </button>
    </div>
  );
};

export default SwiperTexts;

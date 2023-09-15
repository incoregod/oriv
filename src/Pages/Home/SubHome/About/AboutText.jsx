const AboutText = ({ text, style, textStyle }) => {
  return (
    <div
      className={`w-[250px] sm:w-[450px] lg:w-[650px]  2xl:w-[950px] ${style}`}
    >
      <h1
        className={`${
          textStyle
            ? textStyle
            : "text-center font-light lg:text-4xl text-2xl  2xl:text-5xl font-playfair"
        }`}
      >
        {text}
      </h1>
    </div>
  );
};

export default AboutText;

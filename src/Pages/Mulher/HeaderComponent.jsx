const HeaderComponent = ({ imageSrc, title, subTitle }) => {
  return (
    <>
      <div className="px-6 py-12 text-center md:px-12 md:text-left font-playfair bg-gradient-to-b from-white via-gray-400  to-gray-50 ">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="grid items-center md:grid-cols-2">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 max-md:mt-8 py-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 md:-mr-14 backdrop-blur-[30px]">
              <h1 className="mt-2 mb-16 text-3xl tracking-tight md:text-4xl xl:text-5xl">
                {title} <br />
                <hr className="my-5" />
                <span className="text-primary">{subTitle}</span>
              </h1>
            </div>

            <div className="md:mb-12 lg:mb-0  max-md:hidden">
              <img
                src={imageSrc}
                className="w-full h-[40rem] object-cover rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;

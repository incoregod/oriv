import Icons from "../Icons/Icons";

const Counter = ({ icon, style, bgColor, textColor }) => {
  const bg = bgColor && `bg-${bgColor}`;
  const textC = textColor && `text-${textColor}`;
  return (
    <>
      <Icons icon={icon} styles={style} />
      <div
        className={`border rounded-full absolute bottom-0 right-2 w-3 h-3 flex ${bg}   justify-center items-center`}
      >
        <span className={`text-[8px] font-bold ${textC}`}>0</span>
      </div>
    </>
  );
};

export default Counter;

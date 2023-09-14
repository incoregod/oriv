import { BsSuitHeart } from "react-icons/bs";
import { PiShoppingBagOpenThin } from "react-icons/pi";
const IconsSmall = ({ type, color }) => {
  const bgColor = color === "white" ? "bg-white" : "bg-gray-800";
  const icon =
    type === "heart" ? (
      <BsSuitHeart className="mr-3 ml-3 h-7 cursor-pointer" />
    ) : (
      <PiShoppingBagOpenThin className="mr-3 ml-3 h-7 cursor-pointer w-5" />
    );
  return (
    <div className="relative ">
      {icon}
      <div
        className={`border rounded-full absolute bottom-0 right-2 w-3 h-3 flex ${bgColor} justify-center items-center`}
      >
        <span
          className={`text-[8px] font-bold ${
            color === "white" ? "text-gray-800" : "text-white"
          }`}
        >
          0
        </span>
      </div>
    </div>
  );
};

export default IconsSmall;

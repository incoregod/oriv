import { BsSuitHeartFill } from "react-icons/bs";

const ProductCard = ({ children }) => {
  return (
    <div className="flex flex-col items-start relative ">
      {children}
      <BsSuitHeartFill className="absolute top-3 right-5 w-4 h-4 text-white hover:scale-125 transition-all ease-in-out duration-300 hover:text-yellow-400 cursor-pointer" />
    </div>
  );
};

export default ProductCard;

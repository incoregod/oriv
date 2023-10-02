import { BsPerson, BsGlobe, BsSearch } from "react-icons/bs";
import { PiMapPinLight } from "react-icons/pi";
import { BsSuitHeart } from "react-icons/bs";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartProvider";
import SearchComponent from "../SearchComponent/SearchComponent";
import { FaTimes } from "react-icons/fa";
const Icons = ({ children, icon, styles }) => {
  const { handleSideMenu } = useContext(ShoppingCartContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  let renderEl;
  switch (icon) {
    case "person":
      renderEl = <BsPerson className={styles} />;
      break;
    case "globe":
      renderEl = <BsGlobe className={styles} />;
      break;
    case "pin":
      renderEl = <PiMapPinLight className={styles} />;
      break;
    case "heart":
      renderEl = <BsSuitHeart className={styles} />;
      break;
    case "shopcart":
      renderEl = (
        <PiShoppingBagOpenThin className={styles} onClick={handleSideMenu} />
      );
      break;
    case "search":
      renderEl = !isSearchOpen ? (
        <BsSearch
          className={`cursor-pointer ${styles}`}
          onClick={() => setIsSearchOpen((prev) => !prev)}
        />
      ) : (
        <FaTimes
          className="cursor-pointer"
          onClick={() => setIsSearchOpen((prev) => !prev)}
        />
      );

      break;
    default:
      break;
  }
  return (
    <div>
      {renderEl}
      {isSearchOpen && <SearchComponent />}
      {children}
    </div>
  );
};

export default Icons;

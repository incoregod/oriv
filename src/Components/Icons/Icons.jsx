import { BsPerson, BsGlobe, BsSearch } from "react-icons/bs";
import { PiMapPinLight } from "react-icons/pi";
import { BsSuitHeart } from "react-icons/bs";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartProvider";
const Icons = ({ children, icon, styles }) => {
  const { handleSideMenu } = useContext(ShoppingCartContext);
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
      renderEl = <BsSearch className={styles} />;
      break;
    default:
      break;
  }
  return (
    <div>
      {renderEl}
      {children}
    </div>
  );
};

export default Icons;

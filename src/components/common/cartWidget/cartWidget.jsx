import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../context/cartContext";
import './CartWidget.css';

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const itemCount = getTotalQuantity();

  return (
    <div className="cart-widget-container">
      <FaShoppingCart className="cart-widget-icon" />
      {itemCount > 0 && <span className="cart-widget-badge">{itemCount}</span>}
    </div>
  );
};

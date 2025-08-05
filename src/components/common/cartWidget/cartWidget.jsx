import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css';

export const CartWidget = () => {
  const itemCount = 0;

  return (
    <div className="cart-widget-container">
      <FaShoppingCart className="cart-widget-icon" />
      <span className="cart-widget-badge">{itemCount}</span>
    </div>
  );
};

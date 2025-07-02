import { FaShoppingCart } from "react-icons/fa";
export const CartWidget = () => {
  const itemCount = 3; 

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <span>🛒</span>
      <span>{itemCount}</span>
    </div>
  );
};
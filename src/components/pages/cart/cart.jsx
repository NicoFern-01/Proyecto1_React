import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import Contador from "../../contador/Contador"; // Asegúrate que ruta y nombre están bien
import './Cart.css';

export const Cart = () => {
  const { cart, removeById, resetCart, getTotalAmount, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (id, nuevaCantidad) => {
    updateQuantity(id, nuevaCantidad);
  };

  if (cart.length === 0) {
    return <p style={{ padding: "2rem" }}>El carrito está vacío.</p>;
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>

      <ul className="cart-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.nombre}</h3>
              <Contador product={item} onQuantityChange={handleQuantityChange} />
              <p>Precio unitario: $ {item.precio}</p>
              <p>Subtotal: $ {item.precio * item.cantidad}</p>
              <button className="cart-item-remove" onClick={() => removeById(item.id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-total">
        <h3>Total: $ {getTotalAmount()}</h3>
        <button className="cart-reset" onClick={resetCart}>Vaciar carrito</button>
      </div>
    </div>
  );
};

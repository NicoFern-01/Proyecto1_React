import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import Contador from "../../contador/Contador"; 
import { Link } from "react-router-dom"; 
import './Cart.css';

export const Cart = () => {
  const { carrito, removeById, resetCart, calcularTotal, updateQuantity } = useContext(CartContext);

  const manejoCantidad = (id, nuevaCantidad) => {
    updateQuantity(id, nuevaCantidad);
  };

  if (!carrito || carrito.length === 0) {
    return <p style={{ padding: "2rem" }}>El carrito está vacío.</p>;
  }

  
  const itemsConStockInsuficiente = carrito.filter(item => item.cantidad > item.stock);
  const puedeComprar = itemsConStockInsuficiente.length === 0;

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>

      <ul className="cart-list">
        {carrito.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.nombre}</h3>
              <Contador product={item} onQuantityChange={manejoCantidad} />
              <p>Precio unitario: $ {item.precio}</p>
              <p>Subtotal: $ {item.precio * item.cantidad}</p>
              {item.cantidad > item.stock && (
                <p className="stock-error">Cantidad supera stock disponible ({item.stock})</p>
              )}
              <button className="cart-item-remove" onClick={() => removeById(item.id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-total">
        <h3>Total: $ {calcularTotal()}</h3>
        <button className="cart-reset" onClick={resetCart}>Vaciar carrito</button>

       
        {puedeComprar ? (
          <Link to="/checkout" className="cart-checkout">
            Finalizar compra
          </Link>
        ) : (
          <button className="cart-checkout-disabled" disabled>
            Finalizar compra
          </button>
        )}
      </div>
    </div>
  );
};

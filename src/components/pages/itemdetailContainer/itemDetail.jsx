import React, { useState, useContext } from "react"; // 👈 Agregá "React"
import { CartContext } from "../../../context/cartContext";
import "./itemDetail.css";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAgregar = () => {
    addToCart({ ...item, cantidad });
  };

  const incrementar = () => setCantidad(prev => prev + 1);
  const decrementar = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="item-detail-container">
      <img src={item.imagen} alt={item.nombre} className="item-detail-image" />
      <div className="item-detail-content">
        <h2 className="item-detail-title">{item.nombre}</h2>
        <p className="item-detail-description">{item.descripcion}</p>
        <p className="item-detail-price">$ {item.precio}</p>

        <div className="item-detail-quantity-controls">
          <button onClick={decrementar}>-</button>
          <span>{cantidad}</span>
          <button onClick={incrementar}>+</button>
        </div>

        <button className="item-detail-button" onClick={handleAgregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;


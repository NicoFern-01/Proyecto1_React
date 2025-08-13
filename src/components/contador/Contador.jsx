// src/components/common/cantador/Cantador.jsx
import { useState, useEffect } from "react";

const Contador = ({ product, onQuantityChange }) => {
  const [contador, setContador] = useState(product.cantidad || 1);

  useEffect(() => {
    setContador(product.cantidad || 1);
  }, [product.cantidad]);

  const sumar = () => {
    const nuevoContador = contador + 1;
    setContador(nuevoContador);
    onQuantityChange(product.id, nuevoContador);
  };

  const restar = () => {
    if (contador === 1) return;
    const nuevoContador = contador - 1;
    setContador(nuevoContador);
    onQuantityChange(product.id, nuevoContador);
  };

  return (
    <div className="cantador">
      <button onClick={restar} disabled={contador === 1}>
        -
      </button>
      <span>{contador}</span>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default Contador;

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (producto) => {
    const itemExistente = carrito.find((item) => item.id === producto.id);
    if (itemExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + producto.cantidad }
            : item
        )
      );
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const updateQuantity = (id, cantidadNueva) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: cantidadNueva } : item
      )
    );
  };

  const removeById = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const resetCart = () => setCarrito([]);

  const calcularTotal = () => {
    return carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
  };

  const getTotalQuantity = () => {
    return carrito.reduce((acc, item) => acc + item.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        addToCart,
        updateQuantity,
        removeById,
        resetCart,
        calcularTotal,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

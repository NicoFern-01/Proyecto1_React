import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // Inicializar cart con datos de localStorage si existen
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar carrito en localStorage cada vez que cambia el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (producto) => {
    const itemExistente = cart.find((item) => item.id === producto.id);
    if (itemExistente) {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + producto.cantidad }
            : item
        )
      );
    } else {
      setCart([...cart, producto]);
    }
  };

  const updateQuantity = (id, cantidadNueva) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, cantidad: cantidadNueva } : item
      )
    );
  };

  const resetCart = () => setCart([]);

  const removeById = (id) => {
    setCart(cart.filter((elemento) => elemento.id !== id));
  };

  const getTotalAmount = () => {
    return cart.reduce(
      (acc, elemento) => acc + elemento.precio * elemento.cantidad,
      0
    );
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, elemento) => acc + elemento.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeById,
        resetCart,
        getTotalAmount,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;


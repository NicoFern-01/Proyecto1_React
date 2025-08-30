import { useState, useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { collection, doc, serverTimestamp, runTransaction } from "firebase/firestore";
// import { db } from "../../../firebase";
import { db } from "@/firebase.js";
import "../checkout/checkout.css";

const Checkout = () => {
  const { carrito, calcularTotal, resetCart } = useContext(CartContext);

  const [user, setUser] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (carrito.length === 0) {
      setError("El carrito está vacío.");
      return;
    }

    if (!user.nombre || !user.telefono || !user.email) {
      setError("Completa todos los campos.");
      return;
    }

    try {
      setLoading(true);

      //actualizar stock y guardar la orden
      await runTransaction(db, async (transaction) => {
        for (const item of carrito) {
          const productRef = doc(db, "productos", item.id);
          const productSnap = await transaction.get(productRef);

          if (!productSnap.exists()) {
            throw new Error(`El producto "${item.nombre}" no existe.`);
          }

          const stockActual = productSnap.data().stock;
          transaction.update(productRef, { stock: stockActual - item.cantidad });
        }

        
        const order = {
          comprador: user,
          items: carrito,
          total: calcularTotal(),
          fecha: serverTimestamp(),
        };

        const ordersCollection = collection(db, "orders");
        const docRef = doc(ordersCollection);
        transaction.set(docRef, order);

        setOrderId(docRef.id);
      });

      resetCart();
    } catch (err) {
      console.error("Error al procesar la compra:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="checkout-container">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Formulario de Compra</h1>
      {error && <p className="checkout-error">{error}</p>}
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={user.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={user.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <button 
  type="submit" 
  className="checkout-btn" 
  disabled={loading}
>
  <span>{loading ? "Procesando..." : "Finalizar Compra"}</span>
</button>
      </form>
    </div>
  );
};

export default Checkout;



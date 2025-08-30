import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";
// import { db } from "../../../firebase.js";
import { db } from "@/firebase.js";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "productos", id); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() }); 
        } else {
          console.error("El producto no existe en Firestore");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <div style={{ padding: "2rem" }}>
      {loading ? (
        <p>Cargando...</p>
      ) : item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};


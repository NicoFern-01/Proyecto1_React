import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./itemList";
import { db } from "../../../firebase"; 
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productCollection = collection(db, "productos");
        let q;
        if (categoriaId) {
          q = query(productCollection, where("categoria", "==", categoriaId));
        } else {
          q = productCollection;
        }
        const traeProduc = await getDocs(q);
        const productosFirebase = traeProduc.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(productosFirebase);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      }
    };

    obtenerProductos();
  }, [categoriaId]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <ItemList productos={items} />
    </div>
  );
};

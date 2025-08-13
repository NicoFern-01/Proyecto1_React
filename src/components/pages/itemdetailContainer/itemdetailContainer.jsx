import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../../products";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const encontrado = productos.find(prod => prod.id === id);
          resolve(encontrado);
        }, 500);
      });
    };

    fetchItem().then(producto => setItem(producto));
  }, [id]);

  return (
    <div style={{ padding: "2rem" }}>
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
    </div>
  );
};


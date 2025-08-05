import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../../products";
import { ItemList } from "./itemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams(); // 

  useEffect(() => {
    const obtenerProductos = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (categoriaId) {
            resolve(productos.filter(prod => prod.categoria === categoriaId));
          } else {
            resolve(productos); 
          }
        }, 500);
      });
    };

    obtenerProductos().then(res => setItems(res));
  }, [categoriaId]);

  return (
    <div style={{ padding: "2rem" }}>
      <ItemList productos={items} />
    </div>
  );
};

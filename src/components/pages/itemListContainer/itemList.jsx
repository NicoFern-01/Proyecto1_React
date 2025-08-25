import { ItemCard } from "../itemListContainer/itemCard";
import './ItemList.css';

export const ItemList = ({ productos }) => {
  return (
    <div className="items-container">
      {productos.length > 0 ? (
        productos.map((prod) => (
          <ItemCard key={prod.id} producto={prod} />
        ))
      ) : (
        <p>No hay productos disponibles 🚫</p>
      )}
    </div>
  );
};

import { ItemCard } from "../itemListContainer/itemCard";
import './ItemList.css';

export const ItemList = ({ productos }) => {
  return (
    <div className="items-container">
      {productos.map(prod => (
        <ItemCard key={prod.id} producto={prod} />
      ))}
    </div>
  );
};

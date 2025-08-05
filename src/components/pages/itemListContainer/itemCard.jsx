import { Link } from "react-router-dom";
import './ItemCard.css';

export const ItemCard = ({ producto }) => {
  return (
    <div className="item-card">
      <img src={producto.imagen} alt={producto.nombre} className="item-image" />
      <div className="item-info">
        <h4 className="item-title">{producto.nombre}</h4>
        <p className="item-price">${producto.precio}</p>
        <Link to={`/item/${producto.id}`} className="item-link">Ver detalle</Link>
      </div>
    </div>
  );
};


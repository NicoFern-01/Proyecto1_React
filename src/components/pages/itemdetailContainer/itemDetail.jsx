import './ItemDetail.css';

export const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail-container">
      <img src={item.imagen} alt={item.nombre} className="item-detail-image" />
      <div className="item-detail-content">
        <h2 className="item-detail-title">{item.nombre}</h2>
        <p className="item-detail-description">{item.descripcion}</p>
        <p className="item-detail-price">$ {item.precio}</p>
        <button className="item-detail-button">Agregar al carrito</button>
      </div>
    </div>
  );
};


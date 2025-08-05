import { Link } from "react-router-dom";
import { CartWidget } from '../../common/cartWidget/cartWidget';
import logozapas from '../../../assets/image/logozapas.jpg';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <img src={logozapas} alt="Logo" className="logo-image" />
        <span className="logo-text">Vinos Del Sur</span>
      </Link>

      <ul className="nav-links">
  <li><Link to="/">Inicio</Link></li>
  <li><Link to="/categoria/vinos">Vinos</Link></li>
  <li><Link to="/categoria/espumantes">Espumantes</Link></li>
  <li><Link to="/categoria/licores">Licores</Link></li>
</ul>
      <Link to="/carrito" className="cart-link">
        <CartWidget />
      </Link>
    </nav>
  );
};

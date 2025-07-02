import { CartWidget } from '../cartWidget/CartWidget';
export const Navbar = () => {
    return (
        <nav style={styles.nav}>
      <div style={styles.logo}>MiTienda</div>

      <ul style={styles.links}>
        <li>Inicio</li>
        <li>Vinos</li>
        <li>Espumantes</li>
        <li>Licores</li>
      </ul>

      <CartWidget />
    </nav>
    );
}
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0
  }
};

export const Footer = () => {
  return (
    <div>
      <footer
        style={{
          padding: '1rem',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          borderTop: '1px solid #ddd'
        }}
      >
        <h2>Vinos del Sur - Tu rincón del buen gusto 🍷</h2>
        <p>📍 Dirección: Av. del Vino 1234, Mendoza, Argentina</p>
        <p>📧 Correo: contacto@vinosdelsur.com</p>
        <p>📞 Teléfono: +54 9 261 123 4567</p>
        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
          &copy; {new Date().getFullYear()} MiTienda. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

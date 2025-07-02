
export const ItemListContainer = ({ hola, user, subtitle }) => {
  return (
    <section style={styles.container}>
      <h2>{hola}</h2>
      <h3>Hola, {user} 👋</h3>
      <p>{subtitle}</p>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    fontSize: '1.2rem'
  }
};

import React from 'react';

export const ItemListContainer = ({ hola }) => {
  return (
    <section style={styles.container}>
      <h2>{hola}</h2>
      {}
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

import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  const [userName] = useState('Fernando'); // Nombre de usiario por defecto 

  return (
    <div>
      <Navbar />
      <main>
        <ItemListContainer 
          hola="¡Bienvenido a MiTienda!" 
          user={userName} 
          subtitle="Acá encontrarás los mejores productos del mercado"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

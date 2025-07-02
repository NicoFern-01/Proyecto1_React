import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <ItemListContainer hola="¡Bienvenido a MiTienda!" />
      </main>
      <Footer />
    </div>
  );
}

export default App;

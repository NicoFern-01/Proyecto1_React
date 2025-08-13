import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layouts/navbar/Navbar';
import { Footer } from './components/layouts/footer/footer';
import { ItemListContainer } from './components/pages/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/pages/itemdetailContainer/itemdetailcontainer';
import { NotFound } from './components/pages/notFound';
import { Cart } from './components/pages/cart/Cart'; // ← nuevo
import CartContextProvider from './context/cartContext'; // importar provider

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} /> {/* ← nuevo */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;




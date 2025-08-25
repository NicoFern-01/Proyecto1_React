import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layouts/navbar/Navbar';
import { Footer } from './components/layouts/footer/footer';
import { ItemListContainer } from './components/pages/itemListContainer/itemListContainer';
import { ItemDetailContainer } from './components/pages/itemdetailContainer/itemdetailContainer';
import { NotFound } from './components/pages/notFound';
import { Cart } from './components/pages/cart/cart'; // ← nuevo
import CartContextProvider from './context/cartContext'; // importar provider
import Checkout from "./components/pages/checkout/checkout"; // importar Checkout


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
              <Route path="/carrito" element={<Cart />} /> 
              <Route path="*" element={<NotFound />} />
              <Route path="/checkout" element={<Checkout />} /> 
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;




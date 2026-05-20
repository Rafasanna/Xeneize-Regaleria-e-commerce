import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Cart } from "./pages/Cart";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Offers } from "./pages/Offers";
import { ProductDetail } from "./pages/ProductDetail";
import { Products } from "./pages/Products";
import { Account } from "./pages/Account";
import { Checkout } from "./pages/Checkout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/categorias" element={<Products />} />
          <Route path="/ofertas" element={<Offers />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mi-cuenta" element={<Account />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

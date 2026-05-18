import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Cart } from "./pages/Cart";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Offers } from "./pages/Offers";
import { ProductDetail } from "./pages/ProductDetail";
import { Products } from "./pages/Products";
import { Account } from "./pages/Account";

export default function App() {
  return (
    <div className="min-h-screen bg-blush-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/categorias" element={<Products />} />
          <Route path="/ofertas" element={<Offers />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mi-cuenta" element={<Account />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

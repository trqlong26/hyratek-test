import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/" || "/*"} element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

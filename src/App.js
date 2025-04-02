import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/styles.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          {/* Header */}
          <header className="header">
            <h1 className="header-title">Nguyen's Store</h1>
            <nav className="nav-links">
              <Link to="/" className="nav-button">Home</Link>
              <Link to="/cart" className="nav-button">Cart</Link>
            </nav>
          </header>

          {/* Nội dung trang */}
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </CartProvider>
  );
}

export default App;

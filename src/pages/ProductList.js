import React from "react";
import { useCart } from "../context/CartContext"; // Nhập useCart từ CartContext
import { Link } from "react-router-dom"; // Sử dụng Link từ react-router-dom
const ProductList = () => {
  const { addToCart, message } = useCart(); // Lấy hàm addToCart và message từ CartContext

  const products = [
    { id: 1, name: "iPhone 14", price: 650, image: "https://www.balajiwireless.com/core/media/media.nl?id=7315385&c=4215023&h=IiEXx2QOk-OYnNlclDD_O9eT8LSIc7hmWQbzYvKcyTjKzh5n&resizeid=9&resizeh=345&resizew=345" },
    { id: 2, name: "iPhone 15", price: 800, image: "https://mobileworld.com.vn/uploads/product/iPhone_15_Series/thumbs/ip15_mint.webp" },
    { id: 3, name: "iPhone 16", price: 1000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Phone/Apple/iPhone-16/dien-thoai-iphone-16-11.jpg" },
  ];

  return (
    <div>
      {message && <div className="message">{message}</div>} {/* Hiển thị thông báo nếu có */}
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price} USD</p>
            <button
              className="button"
              onClick={() => addToCart(product)} // Thêm vào giỏ hàng khi nhấn nút
            >
              Thêm vào giỏ hàng
            </button>
            <Link to={`/product/${product.id}`} className="button details-button">
              Chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

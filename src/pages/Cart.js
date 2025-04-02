import React from "react";
import { useCart } from "../context/CartContext"; // Nhập useCart từ CartContext

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, message } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      {message && <div className="message">{message}</div>} {/* Hiển thị thông báo nếu có */}
      <h2>Giỏ Hàng</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Giỏ hàng của bạn đang trống.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.price} USD</p>
                <div className="quantity-controls">
                  <button className="button" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="button" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button className="button" onClick={() => removeFromCart(item.id)}>Xóa</button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-summary">
          <p>Tổng tiền: {calculateTotal()} USD</p>
          <button className="button" onClick={clearCart}>Xóa tất cả</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

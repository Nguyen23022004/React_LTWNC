import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/styles.css";

const products = [
  { id: 1, name: "iPhone 14", price: 1400, image: "https://www.balajiwireless.com/core/media/media.nl?id=7315385&c=4215023&h=IiEXx2QOk-OYnNlclDD_O9eT8LSIc7hmWQbzYvKcyTjKzh5n&resizeid=9&resizeh=345&resizew=345" },
  { id: 2, name: "iPhone 15", price: 1700, image: "https://mobileworld.com.vn/uploads/product/iPhone_15_Series/thumbs/ip15_mint.webp" },
  { id: 3, name: "iPhone 16", price: 20000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Phone/Apple/iPhone-16/dien-thoai-iphone-16-11.jpg" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <div className="container">
      <h2 className="list">{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.price} USD</p>
    </div>
  );
};

export default ProductDetail;

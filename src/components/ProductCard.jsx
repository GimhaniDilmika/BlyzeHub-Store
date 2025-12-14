import { useCart } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      {/* 🏷️ BADGE */}
      {product.badge && (
        <span className={`badge ${product.badge.toLowerCase()}`}>
          {product.badge}
        </span>
      )}

      <img src={product.image} alt={product.title} />

      <div className="product-info">
        <h3>{product.title}</h3>

        <p className="price">{product.price}</p>

        <div className="rating">⭐ {product.rating}</div>

        <button
          className="buy-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

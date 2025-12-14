import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "./ShopProducts";
import "./Shop.css";

function Category() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <>
      <Navbar />

      <div className="shop-page">
        <h2 className="section-title">
          {categoryName.toUpperCase()} PRODUCTS
        </h2>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* 🔽 SHOW MORE BUTTON */}
        <div className="show-more-container">
          <button
            className="show-more-btn"
            onClick={() => navigate("/shop")}
          >
            Show More Products →
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Category;

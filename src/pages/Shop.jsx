import "./Shop.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "./ShopProducts";

function Shop() {
  return (
    <>
      <Navbar />

      <div className="shop-page">
        <h2 className="section-title">🔥 Featured Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shop;

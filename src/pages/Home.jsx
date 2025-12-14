import "./Home.css";
import Navbar from "../components/Navbar";
import ProductRow from "../components/ProductRow";
import Footer from "../components/Footer";

import hero from "../assets/m2.png";

import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import h8 from "../assets/h8.png";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import h12 from "../assets/h12.png";
import h10 from "../assets/h10.png";
import h6 from "../assets/h6.png";
import w1 from "../assets/w1.png";
import h9 from "../assets/h9.png";
import h16 from "../assets/h16.png";


function Home() {
  return (
    <div className="home">
      <Navbar />

      {/* HERO SECTION */}
      <header
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>BlyzeHub Store</h1>

          {/* BIG ATTRACTIVE PARAGRAPH */}
          <p className="hero-text">
            Discover hand-picked premium products, exclusive deals, and a
            next-level cinematic shopping experience — built for speed,
            style, and innovation.
          </p>

          <div className="hero-buttons">
            <button className="btn red">Shop Now</button>
            <button className="btn dark">Explore</button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="home-content">
        {/* LEFT – PRODUCT ROWS */}
        <div className="left-section">
          <ProductRow
            title="Trending Products"
            products={[h2, h3, h8, p3]}
          />

          <ProductRow
            title="Best Deals"
            products={[h10, h12, h6, w1]}
          />

          <ProductRow
            title="New Arrivals"
            products={[h9, h3, p4, h16]}
          />
        </div>

        {/* RIGHT – MARKETING PANEL */}
        <div className="right-section">
          <h2>⚡ Why Shop with BlyzeHub?</h2>

          <p>
            BlyzeHub brings you curated products, exclusive deals,
            and lightning-fast delivery — all in one premium platform.
          </p>

          <ul>
            <li>🚚 Fast & Reliable Delivery</li>
            <li>🔒 Secure Payments</li>
            <li>💯 Trusted Sellers</li>
            <li>↩️ Easy Returns</li>
          </ul>

          <button className="cta-btn">Browse All Products</button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;

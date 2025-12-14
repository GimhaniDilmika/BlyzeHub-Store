import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>⚡ BlyzeHub</h2>
          <p>
            Your trusted online marketplace for premium products,
            exclusive deals, and lightning-fast delivery.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Deals</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h4>Stay Connected</h4>
          <p>Get exclusive offers & updates.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} BlyzeHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

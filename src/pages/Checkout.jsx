import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  // 🔒 Block access if cart empty
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/shop");
    }
  }, [cartItems, navigate]);

  const handlePayment = (e) => {
    e.preventDefault();

    // 1️⃣ Show success
    alert("✅ Payment Successful!");

    // 2️⃣ Clear cart
    clearCart();

    // 3️⃣ Redirect to cart
    navigate("/cart");
  };

  return (
    <>
      <Navbar />

      <div className="checkout-wrapper">
        <div className="payment-card">
          <h2>Secure Payment</h2>
          <p className="subtitle">Complete your purchase safely</p>

          <form onSubmit={handlePayment}>
            <div className="input-group">
              <label>Cardholder Name</label>
              <input type="text" required />
            </div>

            <div className="input-group">
              <label>Card Number</label>
              <input type="text" maxLength="19" required />
            </div>

            <div className="row">
              <div className="input-group">
                <label>Expiry Date</label>
                <input type="text" required />
              </div>

              <div className="input-group">
                <label>CVV</label>
                <input type="password" maxLength="3" required />
              </div>
            </div>

            <button
              type="submit"
              className="pay-btn"
              disabled={cartItems.length === 0}
            >
              PAY NOW
            </button>

            <p className="secure-text">🔒 100% Secure Payment</p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;

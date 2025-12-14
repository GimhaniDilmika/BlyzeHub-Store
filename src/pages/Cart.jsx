import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cartItems, updateQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.qty,
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-page">
        {/* LEFT SIDE */}
        <div className="cart-left">
          <h3>Shopping Cart ({cartItems.length} items)</h3>

          {cartItems.length === 0 && (
            <p>Your cart is empty</p>
          )}

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="cart-details">
                <h4>{item.title}</h4>
                <p className="cart-price">{item.price}</p>

                <div className="qty-box">
                  <button onClick={() => updateQty(item.id, "dec")}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, "inc")}>+</button>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                🗑
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="cart-right">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <input
            type="text"
            placeholder="Enter Voucher Code"
            className="voucher"
          />

          {/* 🔒 DISABLED WHEN CART EMPTY */}
          <button
            className="checkout-btn"
            disabled={cartItems.length === 0}
            onClick={() => {
              if (cartItems.length > 0) {
                navigate("/checkout");
              }
            }}
          >
            {cartItems.length === 0
              ? "CART IS EMPTY"
              : `PROCEED TO CHECKOUT (${cartItems.length})`}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;

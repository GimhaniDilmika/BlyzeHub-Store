import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { cartItems } = useCart();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="net-navbar">
      <div className="logo">
        <span className="brand-text">BlyzeHub</span>
      </div>

      <ul className="menu">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Shop
          </NavLink>
        </li>

        <li
          className="dropdown"
          ref={dropdownRef}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <span className={open ? "nav-link active" : "nav-link"}>
            Categories ▾
          </span>

          <ul
            className={`dropdown-menu ${open ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
           <li><NavLink to="/category/electronics">Electronics</NavLink></li>
<li><NavLink to="/category/furniture">Furniture</NavLink></li>
<li><NavLink to="/category/gaming">Gaming</NavLink></li>
<li><NavLink to="/category/accessories">Accessories</NavLink></li>

          </ul>
        </li>
      </ul>

      <div className="icons">
        <NavLink to="/cart" className="cart-icon">
          🛒
          {cartItems.length > 0 && (
            <span className="cart-badge">
              {cartItems.length}
            </span>
          )}
        </NavLink>

        <span className="icon">👤</span>
      </div>
    </nav>
  );
}

export default Navbar;

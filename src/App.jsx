import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import ProtectedRoute from "./components/ProtectedRoute";
import Category from "./pages/Category";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Navigate to="/login" />} />

  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/home" element={<Home/>} />
  <Route path="/shop" element={<Shop/>} />
  <Route path="/cart" element={<Cart/>} />
  <Route path="/checkout" element={<Checkout/>} />
  <Route path="/category/:categoryName" element={<Category />} />

  <Route
    path="/product/:id"
    element={
      <ProtectedRoute>
        <ProductDetails />
      </ProtectedRoute>
    }
  />

  

 
</Routes>

  );
}

export default App;

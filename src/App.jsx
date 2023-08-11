import Login from "./Components/Login";
import Home from "./Components/Home";
import Catalogue from "./Components/Catalogue";
import DescriptionPage from "./Components/DescriptionPage";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Checkout from "./Components/Checkout";
import ThankYou from "./Components/ThankYou";

function App() {
  const [cartCount, setCartCount] = useState(0); // Initialize cart count


  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home cartCount={cartCount} />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/thank-you" element={<ThankYou />} />
        <Route path="/catalogue" element={<Catalogue cartCount={cartCount} />} />
        <Route path="/product/:productId" element={<DescriptionPage cartCount={cartCount} setCartCount={setCartCount} />} />
      </Routes>
    </Router>
  );
}

export default App;

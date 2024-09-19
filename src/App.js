import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;

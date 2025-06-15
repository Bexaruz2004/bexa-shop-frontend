import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import OrderPage from "./components/orderPage";
import Favourites from "./components/favourites";
import ShoppingCart from "./components/shoppingCart";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;

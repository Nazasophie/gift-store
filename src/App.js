// import logo from "./logo.svg";
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { CartProvider } from "react-use-cart";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import ProductListingPage from "./Components/ProductListingPage/ProductListingPage";
import ShoppingCartPage from "./Components/ShoppingCartPage/ShoppingCartPage";
import Checkout from "./Components/CheckoutPage/Checkout";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import GiftOccasionsDropdown from "./Components/Dropdown/GiftOccasionsDropdown";
import GiftBasket from "./Components/Dropdown/GiftBasket";
import MobileDropDown from "./Components/Dropdown/MobileDropDown";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path="/productlisting" element={<ProductListingPage />} />
            <Route path="/items/:itemId" element={<ProductDetails />} />
            <Route path="/shoppingcart" element={<ShoppingCartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;

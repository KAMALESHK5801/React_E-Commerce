import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Accessories from "./pages/Accessories";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import "./App.css";
import './index.css';
import Contact from "./components/contact";



function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/contact" element={<Contact/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>


    </>
  );
}

export default App;
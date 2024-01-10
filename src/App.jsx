import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import Categories from "./components/pages/CategoriesPage/Categories";
import Shop from "./components/pages/ShopPage/Shop";
import Contact from "./components/pages/ContactPage/Contact";
import Deals from "./components/pages/DealsPage/Deals";
import Footer from "./components/Footer";

export default function App(){
  return (
    <div className="main-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
import React, { useState } from "react";
import Header from "../components/header";
import ProductCard from "../components/productCard";
import PromoSwiper from "../components/swiperBanner";
import Footer from "./footer";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Header onSelectCategory={setSelectedCategory} />
      <PromoSwiper />
      <ProductCard selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
}

export default HomePage;

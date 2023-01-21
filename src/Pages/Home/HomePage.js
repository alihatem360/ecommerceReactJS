import React, { useEffect, useState } from "react";
import NavBarLogin from "../../Components/Utility/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import AllProductHomeHook from "../../customHook/product/all-product-home-hook";
const Home = () => {
  const [mostSoldProducts, famProducts, allProducts] = AllProductHomeHook();
  // console.log(mostSoldProducts, "mostSoldProducts in home page");
  // console.log(allProducts, "products in home page");
  return (
    <div style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        products={mostSoldProducts}
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        products={famProducts}
        title="احدث الازياء"
        btntitle="المزيد"
        pathText="/products"
      />
      <BrandFeatured
        title="اقوي الماركات"
        btntitle="المزيد"
        pathText="/allbrands"
      />
    </div>
  );
};

export default Home;

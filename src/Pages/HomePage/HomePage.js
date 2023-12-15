import React from "react";
import Banner from "../../Components/Banner/banner";
import ProductList from "../../Components/ProductList/productlist";
import Cart from "../../Components/Cart/cart";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProductList />
      <Cart />
    </div>
  );
};

export default HomePage;

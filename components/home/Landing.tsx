import React from "react";
import Banner from "./banner";
import Hero from "./hero";
import ProductList from "../product/ProductList";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import Clients from "./Clients";

const Landing = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Clients />
      <ProductList />
      <Banner />
      <Reviews />
    </>
  );
};

export default Landing;

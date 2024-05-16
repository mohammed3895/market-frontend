import React from "react";
import Banner from "./banner";
import Hero from "./hero";
import ProductList from "../product/ProductList";
import Image from "next/image";
import { Button } from "../ui/button";
import AboutUs from "./AboutUs";

const Landing = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <ProductList />
      <Banner />
    </>
  );
};

export default Landing;

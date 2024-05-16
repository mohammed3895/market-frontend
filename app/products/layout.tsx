import Footer from "@/components/footer/Footer";
import MobileNav from "@/components/header/MobileNav";
import Navbar from "@/components/header/Navbar";
import React from "react";

const ProuctsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default ProuctsLayout;

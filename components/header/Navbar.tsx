import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="w-full flex items-center h-16">
      <MobileNav />
      <div className="hidden md:flex justify-start px-8 gap-6 items-center w-full">
        <Logo />
        <NavItems />
      </div>
    </header>
  );
};

export default Navbar;

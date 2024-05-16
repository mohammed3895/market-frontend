import React from "react";
import Logo from "./Logo";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import NavItems from "./NavItems";
import MobileNavItems from "./MobileNavItems";

const MobileNav = () => {
  return (
    <div className="w-full h-full flex items-center px-4 py-2 md:hidden">
      <div className="w-full h-full flex items-center justify-between gap-3">
        <Logo />
        <Sheet>
          <SheetTrigger>
            <button className="w-8 h-8 rounded-sm flex items-center justify-center bg-accent text-primary">
              <Menu className="w-4 h-4" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="w-full h-full mt-12">
              <div className="felx flex-col items-start justify-start">
                <MobileNavItems />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;

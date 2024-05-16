"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavLinks } from "@/constants/NavLinks";

const NavItems = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="rounded-none md:rounded-full bg-transparent md:bg-sky-50 w-full flex items-start justify-start flex-col md:flex-row">
        {NavLinks.map((link, i) => (
          <NavigationMenuItem key={i}>
            <NavigationMenuTrigger className="rounded-full bg-transparent hover:bg-transparent px-4 py-1 text-primary font-medium w-full">
              {link.text}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-[300px] bg-sky-50 p-2 flex flex-col items-center justify-center gap-2 text-primary shadow-none border-none">
              {link.categories.map((category, i) => (
                <NavigationMenuLink
                  key={i}
                  href={category.path}
                  className="w-[200px] flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sky-100"
                >
                  <category.icon strokeWidth={1.2} size={22} />
                  {category.text}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavItems;

import {
  Home,
  Laptop2,
  LogIn,
  LogOut,
  NotebookText,
  PawPrint,
  Shirt,
} from "lucide-react";

export const NavLinks = [
  {
    path: "/products",
    text: "Products",
    categories: [
      {
        path: "/products/fashion",
        text: "Fashion",
        icon: Shirt,
      },
      {
        path: "/products/tech",
        text: "Electronics",
        icon: Laptop2,
      },
      {
        path: "/products/pets",
        text: "Pets",
        icon: PawPrint,
      },
    ],
  },
  {
    path: "/products",
    text: "Pages",
    categories: [
      {
        path: "/auth/sign-in",
        text: "Sign in",
        icon: LogIn,
      },
      {
        path: "/auth/sign-up",
        text: "Sign up",
        icon: LogOut,
      },
      {
        path: "/",
        text: "home",
        icon: Home,
      },
    ],
  },
  {
    path: "/blog",
    text: "Blog",
    categories: [
      {
        path: "/blog",
        text: "Page 1",
        icon: NotebookText,
      },
      {
        path: "/blog",
        text: "Page 2",
        icon: NotebookText,
      },
      {
        path: "/blog",
        text: "Page 3",
        icon: NotebookText,
      },
    ],
  },
];

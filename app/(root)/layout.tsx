import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import "../globals.css";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Market",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-svh flex items-center lg:items-start p-0">
      <div className="w-full h-full">
        {/* <Navbar /> */}
        {children}
        <Footer />
      </div>
    </div>
  );
}

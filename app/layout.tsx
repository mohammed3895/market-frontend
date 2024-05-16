"use client";
import { Rubik } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import SessionProvider from "@/providers/SessionProvider";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      offset: 280,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={cn(
          rubik.className,
          "transition-colors ease-in-out duration-300"
        )}
      >
        <SessionProvider>
          <main className="flex w-full flex-col min-h-screen p-0">
            {children}
          </main>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}

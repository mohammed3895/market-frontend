import React from "react";
import { Black_Ops_One } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const blackops = Black_Ops_One({ subsets: ["latin"], weight: ["400"] });

const Logo = () => {
  return (
    <Link href="/" className={cn("tex-2xl  font-semibold text-primary")}>
      <Image
        src="/assets/logo.svg"
        alt=""
        width={40}
        height={40}
        className="w-8 h-8 opacity-70"
      />
    </Link>
  );
};

export default Logo;

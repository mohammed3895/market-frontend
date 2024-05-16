import React from "react";
import MostPopular from "./MostPopular";
import prisma from "@/lib/db/db";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import List from "./List";
import { ProductCardProps } from "./ProductCard";

const ProductList = async () => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="flex flex-col items-center justify-center py-16">
      <h1 className="text-2xl text-center font-medium tracking-wide text-primary capitalize my-12 mx-auto w-fit py-4 border-b">
        New Trends
      </h1>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:col-span-2 lg:grid-cols-3 list gap-4 my-12 px-4">
        {products.slice(0, 4).map((product: ProductCardProps, i: number) => (
          <List index={i} product={product} key={product.id} />
        ))}
      </div>
      <Link
        href="/products"
        className={cn(
          buttonVariants({ variant: "link" }),
          "mt-4 text-lg underline hover:opacity-80 font-semibold w-full md:w-1/2 self-center"
        )}
      >
        Browse more
      </Link>
    </section>
  );
};

export default ProductList;

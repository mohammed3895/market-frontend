import React from "react";
import MostPopular from "./MostPopular";
import prisma from "@/lib/db/db";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import List from "./List";
import { ProductCardProps } from "./ProductCard";
import { SectionTitle } from "../SectionTitle";

const ProductList = async () => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="flex flex-col items-center justify-center p-4 mt-20 md:p-8 lg:p-8 xl:p-14">
      <SectionTitle title="New Trends" />
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

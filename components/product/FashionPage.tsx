import React from "react";
import ProductCard from "./ProductCard";
import prisma from "@/lib/db/db";
import List from "./List";
import EmptyProducts from "./EmptyProducts";

const FashionPage = async () => {
  const products = await prisma.product.findMany({
    where: { category: "fashion" },
    orderBy: { createdAt: "asc" },
  });

  if (products.length === 0) return <EmptyProducts />;

  return (
    <div>
      <div className="py-12">
        <div className="flex flex-col items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-content-center place-items-center">
            {products.map((product, i) => (
              <List index={i} key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionPage;

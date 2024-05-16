import React from "react";
import ProductCard from "./ProductCard";
import prisma from "@/lib/db/db";
import List from "./List";

const TechPage = async () => {
  const products = await prisma.product.findMany({
    where: { category: "tech" },
    orderBy: { createdAt: "asc" },
  });

  return (
    <div>
      <div className="py-12">
        <div className="flex flex-col items-center w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center place-items-center list">
            {products.map((product, i) => (
              <List index={i} key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechPage;

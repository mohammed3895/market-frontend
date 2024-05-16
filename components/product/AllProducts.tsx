import { Metadata } from "next";
import prisma from "@/lib/db/db";
import List from "./List";

export const metadata: Metadata = {
  title: "Products - All",
};

const AllProducts = async () => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="py-12 w-full">
      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full list">
          {products.map((product, i) => (
            <List key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

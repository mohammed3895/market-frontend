import Image from "next/image";
import React from "react";
import Btn from "../btn";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import AddToCartButton from "./AddToCartButton";
import { increaseQuantity } from "@/app/products/[productId]/actions";
import { cn } from "@/lib/utils";
import { ArrowUpRightFromCircle } from "lucide-react";

export interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
}

const ProductCard: any = ({
  product,
  ownerId,
  isVisible,
}: {
  product: ProductCardProps;
  ownerId: string;
  isVisible: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-white p-0 rounded-lg  relative invisible w-full h-72 md:h-96 overflow-hidden",
        { "visible animate-in fade-in-5": isVisible }
      )}
    >
      <div className="w-full h-full">
        <Image
          src={product.imageUrl}
          alt=""
          width={400}
          height={300}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <Link
        href={`/products/${product.id}`}
        className="flex absolute bottom-0 left-0 top-0 right-0 flex-col items-center justify-center bg-background/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity ease-in duration-300 gap-4"
      >
        <ArrowUpRightFromCircle
          strokeWidth={1}
          className="w-12 h-12 text-background"
        />
        <h1 className="text-2xl font-semibold drop-shadow-xl text-background uppercase">
          {product.name}
        </h1>

        {/* <div className="mt-2 flex flex-row items-center justify-between w-full gap-2">
          <AddToCartButton
            title="Add to cart"
            classname="w-full"
            productId={product.id as unknown as string}
            ownerId={ownerId}
            increaseQuantity={increaseQuantity}
          />
          <Link
            href={`/products/${product.id}`}
            className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
          >
            See Details
          </Link>
        </div> */}
      </Link>
    </div>
  );
};

export default ProductCard;

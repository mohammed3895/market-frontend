import { Star } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import prisma from "@/lib/db/db";
import AddToCartButton from "@/components/product/AddToCartButton";
import { increaseQuantity } from "./actions";
import List from "@/components/product/List";
import { getServerSession } from "next-auth";
import { config } from "@/auth";

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = searchParams.productId;
  console.log(id);

  // fetch data
  const product = await prisma.product.findUnique({
    where: { id: params.productId },
  });

  return {
    title: product?.name,
  };
}

const ProductDetails = async ({ params }: Props) => {
  const { productId } = params;
  const product = await prisma.product.findUnique({
    where: { id: params.productId },
  });
  const similarProducts = await prisma.product.findMany({
    where: { category: product?.category },
    take: 4,
  });

  const session = await getServerSession(config);
  const user = session?.user;

  const userId = user?.email as string;

  return (
    <div className="flex flex-col w-full items-center justify-center h-full  p-4  md:p-12">
      <div className="w-full h-full flex border-b pb-20">
        <div className="w-full flex flex-col md:flex-row h-full bg-cover mt-0">
          {product?.imageUrl && (
            <div className="w-full h-full flex items-start justify-start">
              <div className="w-full h-[70vh]">
                <Image
                  src={product.imageUrl}
                  alt={product!.name}
                  height={500}
                  width={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/*  RIGHT SIDE OF THE PRODUCT DETAILS PAGE */}
          {product && (
            <div className="w-full relative h-[95%] hidden lg:flex flex-col items-start justify-center bg-cover rounded-3xl py-4 px-8 bg-center">
              <div className="flex flex-col items-start justify-start gap-1 w-full mt-6">
                <h3 className="text-xl font-normal tracking-wide uppercase text-muted-foreground">
                  {product?.category}
                </h3>
                <h1 className="text-3xl font-bold tracking-wide uppercase text-zinc-900">
                  {product?.name}
                </h1>
              </div>
              <div className="flex items-center gap-1 text-yellow-400 mt-2">
                <Star className="w-4" />
                <Star className="w-4" />
                <Star className="w-4" />
                <Star className="w-4" />
                <Star className="w-4" />
              </div>
              <span className="my-6 text-4xl font-normal tracking-wide pro_test">
                $ {product?.price}
              </span>
              <p className="text-base text-muted-foreground font-normal mt-6">
                {product?.description}
              </p>
              {/* COLORS */}
              <div className="flex items-center justify-start gap-4 mt-6">
                <span className="w-8 h-8 rounded-full bg-red-400" />
                <span className="w-8 h-8 rounded-full bg-yellow-400" />
                <span className="w-8 h-8 rounded-full bg-gray-600" />
              </div>
              <div className="my-6 w-1/3">
                <AddToCartButton
                  title="Add to cart"
                  increaseQuantity={increaseQuantity}
                  ownerId={userId}
                  productId={product.id as unknown as string}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full py-16">
        <h1 className="text-2xl text-center font-medium tracking-wide text-primary capitalize my-12 mx-auto w-fit py-4 border-b">
          Similar Products
        </h1>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 last:col-span-4">
          {similarProducts.map((product, i) => (
            <List index={i} product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

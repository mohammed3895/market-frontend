import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="bg-white p-0 rounded-lg relative h-72 md:h-96 overflow-hidden w-full">
      <Skeleton className="w-full h-full rounded-t-lg bg-gray-100" />
      <div className="flex flex-col row-span-1 items-start justify-start gap-2 p-4 mt-4 w-full">
        <Skeleton className=" bg-transparent w-3/4 h-4" />
        <Skeleton className="px-3 py-1 mt-2 rounded-full text-sm bg-transparent w-1/4 h-4" />
        <div className="mt-2 flex flex-row items-center justify-between w-full gap-2">
          <Skeleton className="px-4 py-2 w-full h-8 rounded-lg bg-transparent mt-2" />
          <Skeleton className="px-4 py-2 w-full h-8 rounded-lg bg-transparent mt-2" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;

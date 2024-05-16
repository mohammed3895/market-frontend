import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ReviewCard from "./ReviewCard";
import { SectionTitle } from "../SectionTitle";

const Reviews = () => {
  return (
    <div className="w-full min-h-[60vh] h-full flex flex-col items-center justify-center lg:p-8 xl:p-14">
      <SectionTitle title="Reviews" />
      <div className="w-full h-3/4 flex items-center justify-center p-4">
        <Carousel className="w-3/4 h-full items-center justify-center flex">
          <CarouselContent className="w-full">
            <CarouselItem>
              <ReviewCard />
            </CarouselItem>
            <CarouselItem>
              <ReviewCard />
            </CarouselItem>
            <CarouselItem>
              <ReviewCard />
            </CarouselItem>
            <CarouselItem>
              <ReviewCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;

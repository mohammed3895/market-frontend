import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const AboutUsCard = ({ img }: { img: string }) => {
  return (
    <div className="w-full h-full flex-col-reverse md:flex-row md:items-start md:justify-center flex items-center xl:px-16 gap-8">
      <div className="h-fit md:h-96 w-full rounded-3xl col-span-2 flex items-center justify-start">
        <div className="w-full h-full flex flex-col items-start justify-start md:justify-center lg:p-12 text-left gap-3">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight">
            Levitating music headphones
          </h1>
          <p className="text-sm lg:text-base font-normal text-muted-foreground tracking-tight md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eius nisi eligendi omnis earum facere labore inventore corrupti.
            Odit.
          </p>
          <Button
            variant="outline"
            className="rounded-full text-base font-normal text-primary border-primary py-3 px-6 bg-transparent hover:bg-primary hover:text-secondary-foreground"
          >
            pre order
          </Button>
        </div>
      </div>

      {/*  */}
      <div className="w-full md:w-96 xl:h-[28rem] xl:w-[28rem] xl:min-w-[28rem] md:min-w-80 md:h-80 h-72 rounded-3xl bg-white col-span-1 relative">
        <Image
          src={img}
          alt=""
          width={380}
          height={380}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default AboutUsCard;

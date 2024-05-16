import React from "react";
import Btn from "../btn";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowUpRightFromCircle, Mouse } from "lucide-react";
import Navbar from "../header/Navbar";

const Hero = () => {
  return (
    <div className="flex items-start justify-between w-full h-svh">
      <div
        className="w-full h-full bg-cover mt-0"
        // style={{
        //   backgroundImage: `url('/assets/bg2.jpg')`,
        // }}
      >
        <Navbar />
        <div className="w-full h-full flex items-center justify-center lg:justify-start">
          <div className="flex flex-col w-full items-center lg:items-start justify-center lg:justify-start gap-4 text-center lg:text-left md:px-4 lg:px-8">
            {/* <Button
              variant="outline"
              className="rounded-full text-primary bg-transparent border-primary font-medium hover:text-secondary-foreground px-8 hover:bg-primary"
            >
              Make pre order now
            </Button> */}
            <h1
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="700"
              className="text-3xl md:text-4xl lg:text-[5rem] !leading-[1] font-normal text-primary capitalize"
            >
              explore our brand new products
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="700"
              data-aos-duration="700"
              className="text-muted-foreground text-base w-4/5"
            >
              Meet our high-quality products thats combine between high quality
              and low price. to bring you ultimate experince
            </p>

            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="700"
              className="flex items-center justify-start gap-4 mt-3"
            >
              <Btn btnVariant="outline" title="pre-order" />
              <Button
                variant="ghost"
                className="rounded-full font-light flex items-center justify-center gap-2 py-3 md:py-6 px-6 md:px-8 text-primary  hover:text-primary hover:bg-secondary-foreground hover:fill-primary"
              >
                Learn More
                <ArrowUpRightFromCircle
                  strokeWidth={1.25}
                  className="w-5 h-5"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="w-full relative h-full hidden lg:flex items-center justify-end bg-cover py-4 px-8 bg-center"
        style={{
          backgroundImage: `url('/assets/bg2.jpg')`,
        }}
      >
        {/* <div className="absolute w-[5rem] rounded-full  h-[5rem] text-secondary top-1/2 bottom-1/2 -left-[3rem] border-[6px] border-background -translate-y-1/2 flex items-center justify-center bg-accent">
          <Mouse
            strokeWidth={1.2}
            className="w-[1.9rem] h-[1.9rem] animate-bounce"
            data-aos="zoom-in"
          />
        </div> */}
        {/*  */}
        <div className="w-full h-[90%] flex items-start justify-between relative">
          <div className="w-full h-full relative p-4 flex flex-col gap-2 items-start justify-end">
            <h1
              // data-aos="fade-left"
              className="text-xl uppercase font-[600] tracking-wide text-secondary text-nowrap tracking-in-expand "
            >
              Online Market
            </h1>
            <div
              className="w-[2px] border border-secondary border-dashed h-full opacity-45"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="700"
            />
          </div>

          {/*  */}
          <div
            data-aos="fade-right"
            className="w-full h-full relative p-4 flex flex-col gap-2 items-end justify-start"
          >
            <div
              className="w-[2px] border border-secondary border-dashed h-full opacity-45"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="700"
            />
            <h1 className="text-xl uppercase font-[600] tracking-wide text-secondary text-nowrap tracking-in-expand ">
              Online Market
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

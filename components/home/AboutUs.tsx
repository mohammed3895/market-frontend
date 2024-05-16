import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import AboutUsCard from "./AboutUsCard";
import { SectionTitle } from "../SectionTitle";

const AboutUs = () => {
  return (
    <div className="py-16 mt-16 lg:mt-32 w-full min-h-screen md:p-4 lg:p-8 xl:p-14">
      <div className="w-full h-full flex flex-col items-center text-center">
        <div className="w-full h-fit flex flex-col items-center text-center">
          <SectionTitle title="Featured Products" />
        </div>
        <div className="mt-8 bg-sky-50 rounded-none md:rounded-3xl w-full min-h-full h-full p-4 md:py-10 lg:p-8 flex items-center">
          <div className="w-full h-full flex flex-col gap-12 md:[&>*:nth-child(odd)]:flex-row-reverse">
            <AboutUsCard img="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <AboutUsCard img="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <AboutUsCard img="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <AboutUsCard img="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

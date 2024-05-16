import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps {
  onClick?: () => void;
  btnVariant?: [
    "default",
    "ghost",
    "outline",
    "secondary",
    "destructive",
    "link",
    null,
    undefined
  ][number];
  classname?: string;
  title: string;
}

const Btn = ({ onClick, btnVariant, classname, title }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={btnVariant ?? "default"}
      className={cn(
        "rounded-full text-primary font-normal border-primary py-3 md:py-6 gap-3 px-6 md:px-8 bg-transparent hover:bg-primary hover:text-secondary-foreground group capitalize",
        classname
      )}
    >
      <div className="w-2 h-2 ring-1 ring-offset-2 rounded-full bg-primary bing" />
      {title}
    </Button>
  );
};

export default Btn;

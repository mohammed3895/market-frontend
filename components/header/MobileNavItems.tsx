"use client";
import React from "react";
import { NavLinks } from "@/constants/NavLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";

const MobileNavItems = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {NavLinks.map((link, i) => (
        <AccordionItem key={i} value={link.text.toLowerCase()}>
          <AccordionTrigger>
            <h1 className="text-base font-medium tracking-tight text-primary">
              {link.text}
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            {link.categories.map((category, i) => (
              <Link
                href={category.path}
                key={i}
                className="flex items-center justify-start gap-2.5 py-1.5 text-muted-foreground"
              >
                <category.icon className="w-4 h-4 text-primary" />
                {category.text}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MobileNavItems;

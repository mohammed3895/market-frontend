import { type LucideIcon } from "lucide-react";

export interface ButtonProps {
  text: string;
  Icon?: LucideIcon;
  onClick?: () => void;
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive";
  classNames?: string;
}

export interface ProductProps {
  product: {
    photo: string;
    name: string;
    description: string;
    price: number;
  };
}

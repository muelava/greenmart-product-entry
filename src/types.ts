import type { ReactNode } from "react";

export interface PropsButton {
  onClick?: () => void;
  children:ReactNode;
  className?:string
}

export interface Category {
  id: number;
  name: string;
  image: string | null;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  categories: Category[];
}

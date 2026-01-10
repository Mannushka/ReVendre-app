import { Category } from "./Category";
export type Listing = {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
};
//not sure if the type is needed

export type ListingFormValues = {
  title: string;
  price: number;
  category: Category;
  description: string;
  images?: string[];
};

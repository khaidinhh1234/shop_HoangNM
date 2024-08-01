import { ICategory } from "./category";

export interface IProduct {
  productId: string | number | undefined;
  _id?: number | string;
  name: string;
  feature_image: string;
  // category?: string;
  regular_price: number;
  description: string;
  discount: number;
  gallery?: string[];
  featured: boolean;
  quality: number;
  countInStock: number;
  category?: ICategory;
}

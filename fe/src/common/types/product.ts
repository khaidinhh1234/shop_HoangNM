export interface IProduct {
  _id?: string;
  // id?: number,
  name: string;
  category?: string;
  regular_price: number;
  quantity?: number;
  feature_image?: string;
  description?: string;
  discount?: number;
  featured?: boolean;
  countInStock?: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  size: string[];
  color: string[];
  price: number;
  discountPrice: number;
  is_in_inventory: boolean;
  items_left: number;
  imageURL: string;
  quantity: number;
}

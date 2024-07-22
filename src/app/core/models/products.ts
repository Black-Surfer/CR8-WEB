export interface Products {
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
}

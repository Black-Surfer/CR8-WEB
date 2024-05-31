import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected productList: Products[] = [
    {
      id: 1,
      name: "360ml Reusable Food Container" ,
      description: '360ml Reusable Food Container To Go Plastic Bowl For Daily Use Picnic Microwave Safe Fridge Frozen Available',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240511/2024051114445684537.jpeg!/sq/300",
    },
    {
      id: 2,
      name: "Custom Recyclable Biodegradable" ,
      description: 'Custom Recyclable Biodegradable Coffee Tea Nut Packaging Zip Lock Food Package Bolsas Kraft Paper Zipper Bags Stand Up Pouch',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240509/2024050914504625109.jpg!/sq/300",
    },
    {
      id: 3,
      name: "800 Ml Reusable Food Container" ,
      description: '800 Ml Reusable Food Container',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240511/2024051114221222245.jpeg!/sq/500",
    },
    {
      id: 4,
      name: "Custom Printed Food" ,
      description: 'Custom Printed Food Grade Kraft Paper Pla Biodegradable Stand Up Pouch With Ziplock',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240509/2024050914534553953.jpg!/sq/300",
    },
    {
      id: 5,
      name: "360ml Reusable Food Container" ,
      description: '360ml Reusable Food Container To Go Plastic Bowl For Daily Use Picnic Microwave Safe Fridge Frozen Available',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240511/2024051114445684537.jpeg!/sq/300",
    },
    {
      id: 6,
      name: "Custom Recyclable Biodegradable" ,
      description: 'Custom Recyclable Biodegradable Coffee Tea Nut Packaging Zip Lock Food Package Bolsas Kraft Paper Zipper Bags Stand Up Pouch',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240509/2024050914504625109.jpg!/sq/300",
    },
    {
      id: 7,
      name: "800 Ml Reusable Food Container" ,
      description: '800 Ml Reusable Food Container',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240511/2024051114221222245.jpeg!/sq/500",
    },
    {
      id: 8,
      name: "Custom Printed Food" ,
      description: 'Custom Printed Food Grade Kraft Paper Pla Biodegradable Stand Up Pouch With Ziplock',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240509/2024050914534553953.jpg!/sq/300",
    },
    {
      id: 9,
      name: "360ml Reusable Food Container" ,
      description: '360ml Reusable Food Container To Go Plastic Bowl For Daily Use Picnic Microwave Safe Fridge Frozen Available',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240511/2024051114445684537.jpeg!/sq/300",
    },
    {
      id: 10,
      name: "Custom Recyclable Biodegradable" ,
      description: 'Custom Recyclable Biodegradable Coffee Tea Nut Packaging Zip Lock Food Package Bolsas Kraft Paper Zipper Bags Stand Up Pouch',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240509/2024050914504625109.jpg!/sq/300",
    },
    {
      id: 11,
      name: "800 Ml Reusable Food Container" ,
      description: '800 Ml Reusable Food Container',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240511/2024051114221222245.jpeg!/sq/500",
    },
    {
      id: 12,
      name: "Custom Printed Food" ,
      description: 'Custom Printed Food Grade Kraft Paper Pla Biodegradable Stand Up Pouch With Ziplock',
      size: ['M, L, XL'],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 100,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://cdn.bestsuppliers.com/pro_goods_img/20240509/2024050914534553953.jpg!/sq/300",
    },

  ];

  constructor() { }

  getProducts() : Products[]{
    return this.productList;
  }

  getProductById(id: Number) : Products | undefined {
    return this.productList.find(product => product.id === id);
  }
}

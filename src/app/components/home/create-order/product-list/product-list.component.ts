import { Component, inject } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Products } from 'src/app/core/models/products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Products[] = [ ];

  productService: ProductService = inject(ProductService);

  constructor(){
    this.products = this.productService.getProducts();
  }
}

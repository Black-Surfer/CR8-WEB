import { Component } from '@angular/core';
import { Products } from 'app/core/models/products';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products: Products[] = [];

  constructor(private productService: ProductsService) {
    // this.products = this.productService.getProducts();
  }
}

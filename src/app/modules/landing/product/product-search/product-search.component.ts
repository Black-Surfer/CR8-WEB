import { Component, inject } from '@angular/core';
import { Product } from 'app/core/models/products';
import { SharedModule } from 'app/modules/shared/shared.module';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent {
  constructor() {
    this.allProductList = [];
    this.productList = [];
    this.fetchProducts();
  }
  allProductList: Product[];
  productList: Product[];
  private productService = inject(ProductsService);
  searchTerm: string = '';

  onSearch(value: string): void {
    const searchValue = value.toLowerCase();

    if (searchValue === '') {
      this.productList = this.allProductList;
    } else {
      this.productList = this.allProductList.filter((c) =>
        c.name.toLowerCase().startsWith(searchValue)
      );
    }
  }

  fetchProducts() {
    this.productService.getProducts().subscribe({
      next: (res: Product[]) => {
        this.allProductList = this.productList = res;
        console.log(this.allProductList, 'all');
        console.log(this.productList, 'filtered');
      },
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
  }
}

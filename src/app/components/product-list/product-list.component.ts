import { Component, inject } from '@angular/core';
import { Products } from 'app/core/models/products';
import { SharedModule } from 'app/modules/shared/shared.module';
import { ProductsService } from 'app/services/products.service';
import { SearchComponent } from '../../layout/common/search/search.component';
import { AppSearchComponent } from 'app/modules/shared/components/app-search/app-search.component';
import { AppListComponent } from 'app/modules/shared/components/app-list/app-list.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    SharedModule,
    SearchComponent,
    AppSearchComponent,
    AppListComponent,
    NgIf,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  constructor() {
    this.allProductList = [];
    this.productList = [];
    this.fetchProducts();
  }
  allProductList: Products[];
  productList: Products[];
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
    this.productService.getProducts().subscribe(
      (res) => {
        this.allProductList = this.productList = res;
      },
      (err) => {
        console.log(err);
      }
      //   {
      //   next: (res) => {
      //     this.allProductList = this.productList = res;
      //     console.log(this.allProductList, 'all');
      //     console.log(this.productList, 'filtered');
      //   },
      //   complete: () => console.log('complete'),
      //   error: (err) => console.log(err),
      // }
    );
  }
}

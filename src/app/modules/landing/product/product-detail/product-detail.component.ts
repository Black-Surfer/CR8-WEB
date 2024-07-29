import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/core/models/products';
import { ProductsService } from 'app/services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);
  product: Product;
  quantity: number = 1;

  ngOnInit(): void {
    this.product = {} as Product;
    const productId = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    console.log(`Added ${this.quantity} of ${this.product.name} to cart.`);
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/core/models/products';
import { ProductsService } from 'app/services/products.service';
import { CommonModule } from '@angular/common';
import { CartService } from 'app/modules/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  cartService = inject(CartService);
  product: Product;
  quantity: number = 1;
  snackbar: MatSnackBar;

  ngOnInit(): void {
    this.product = {} as Product;
    const productId = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackbar.open('Product added to cart', '', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
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
}

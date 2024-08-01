import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'app/core/models/products';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/modules/shared/shared.module';
import { CartItems } from 'app/core/models/CartItems';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: CartItems[];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.FetchCart();
  }

  private FetchCart() {
    this.cartService.getCartItems().subscribe({
      next: (data) => {
        this.cartItems = data;
        console.log(data);
        this.totalPrice = this.getTotalPrice();
      },
      error: (error) => console.error(error),
    });
  }

  getTotalPrice(): number {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe();
  }

  checkout() {}
}

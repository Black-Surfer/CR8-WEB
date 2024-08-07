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
        this.getTotalPrice();
      },
      error: (error) => console.error(error),
    });
  }

  getTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  increaseQuantity(item: CartItems) {
    item.quantity++;
    this.getTotalPrice();
  }

  decreaseQuantity(item: CartItems) {
    if (item.quantity > 1) {
      item.quantity--;
      this.getTotalPrice();
    }
  }

  removeItem(item: CartItems) {
    this.cartService.removeFromCart(item).subscribe(() => {
      this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
      this.getTotalPrice();
    });
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe();
    this.cartItems = [];
    this.totalPrice = 0;
  }

  checkout() {}
}

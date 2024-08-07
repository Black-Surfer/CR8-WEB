import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'app/core/models/products';
import { Observable } from 'rxjs';
import { CartItems } from 'app/core/models/CartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:3002/cart';

  constructor(private http: HttpClient) {}

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  getCartItems(): Observable<CartItems[]> {
    return this.http.get<CartItems[]>(this.apiUrl);
  }

  removeFromCart(item: CartItems): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }
}

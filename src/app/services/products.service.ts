import { Injectable } from '@angular/core';
import { Product } from 'app/core/models/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:3002/productList';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.getProducts().pipe(
      map((products: Product[]) =>
        products.find((product) => product.id === id)
      )
    );
  }
}

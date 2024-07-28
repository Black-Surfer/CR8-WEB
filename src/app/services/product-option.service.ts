import { Injectable } from '@angular/core';
import { ProductOption } from 'app/core/models/product-option';
import { ProductOptionForm } from 'app/core/models/product-option';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductOptionService {
  private apiUrl = 'https://pac8.com.ng/api/';

  constructor(private http: HttpClient) {}

  getOptions(): Observable<ProductOption[]> {
    let url = this.apiUrl + 'ProductOption/GetProductOptions';
    return this.http.get<ProductOption[]>(url);
  }

  getOption(id: string): Observable<ProductOption> {
    let url = this.apiUrl + 'ProductOption/GetProductOption/' + id;
    return this.http.get<ProductOption>(url);
  }

  createProductOption(payload: ProductOptionForm) {
    let url = this.apiUrl + 'ProductOption/CreateProductOption';
    return this.http.post(url, payload);
  }

  deleteOption(id: number): Observable<ProductOption> {
    let url = this.apiUrl + 'ProductOption/DeleteProductOption/' + id;
    return this.http.delete<ProductOption>(url);
  }
}

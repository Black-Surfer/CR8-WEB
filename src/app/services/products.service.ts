import { Injectable } from '@angular/core';
import { Products } from 'app/core/models/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
}

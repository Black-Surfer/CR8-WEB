import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductOption } from '../models/ProductOption';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductOptionService {

  apiUrl: string = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  GetProductOptions(): Observable<ProductOption[]>{
    let optionUrl = `${this.apiUrl}ProductOption/GetProductOptions`
    return this.httpClient.get<ProductOption[]>(optionUrl);
  }

  GetProductOption(id: number): Observable<ProductOption>{
    let optionUrl = `${this.apiUrl}ProductOption/GetProductOption/`+ id;
    return this.httpClient.get<ProductOption>(optionUrl);
  }

  AddProductOption(payload: ProductOption): Observable<ProductOption>{
    let optionUrl = `${this.apiUrl}ProductOption/CreateProductOption`
    return this.httpClient.post<ProductOption>(optionUrl, payload);
  }

  EditProductOption(payload: ProductOption): Observable<ProductOption>{
    let optionUrl = `${this.apiUrl}ProductOption/UpdateProductOption`
    return this.httpClient.put<ProductOption>(optionUrl, payload);
  }
}

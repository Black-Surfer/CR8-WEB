import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductOption } from 'src/app/core/models/ProductOption';
import { ProductOptionForm } from '../model/Request/ProductOptionForm';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(private httpClient: HttpClient) { }

  getOptions(): Observable<ProductOption[]>{
    let url = environment.apiURL + 'ProductOption/GetProductOptions';
    return this.httpClient.get<ProductOption[]>(url);
  }

  getOption(id:string): Observable<ProductOption>{
    let url = environment.apiURL + 'ProductOption/' + id;
    return this.httpClient.get<ProductOption>(url);
  }

  createProductOption(payload: ProductOptionForm){    
    let url = environment.apiURL + 'ProductOption/CreateProductOption';
    return this.httpClient.post(url, payload);
  }
}

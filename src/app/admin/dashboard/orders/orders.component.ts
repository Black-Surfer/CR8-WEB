import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  productList: any;
  constructor(private httpClient: HttpClient) {
    this.productList=[];
  }

  ngOnInit(): void{
    this.getProductList();
  }

  getProductList()
  {
    this.httpClient.get('https://mocki.io/v1/73ab846e-bcb5-443e-9c7c-11bfebbb3895').subscribe((result:any)=>
    {
      this.productList = result;
    }) 
  }

}

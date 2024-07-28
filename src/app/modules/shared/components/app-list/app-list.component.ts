import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'app/core/models/products';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app-list.component.html',
  styleUrl: './app-list.component.scss',
})
export class AppListComponent implements OnInit {
  @Input() listResult: Products[];
  // @Input() searchTerm: string = '';
  // products: Products[] = [];
  // filteredProducts: Products[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    console.log(this.listResult);
  }
}

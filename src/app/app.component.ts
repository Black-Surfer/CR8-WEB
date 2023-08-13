import { Component } from '@angular/core';
import { ProductOption } from './core/models/ProductOption';
import { ProductOptionService } from './core/services/productOption.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private optionService: ProductOptionService){

  }

  ngOnInit() {
  }

  title = 'cr8';
}

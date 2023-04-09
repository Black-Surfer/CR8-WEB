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

    let payload: ProductOption = {    
    name : "Angular Test",
    description : "Testing on angular"
    }
    this.optionService.CreateProductOption(payload).subscribe(
      (res) => console.log(res),
      (err) => console.log()
    )



    this.optionService.GetProductOptions().subscribe(
      (res) => console.log(res),
      (err) => console.log()
    )




  }


  title = 'cr8';
}

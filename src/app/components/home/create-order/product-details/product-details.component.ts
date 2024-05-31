import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/core/models/products';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  products : Products | undefined



  constructor(){
    const productId = Number(this.route.snapshot.params['id'])
    this.products = this.productService.getProductById(productId);
  }
}

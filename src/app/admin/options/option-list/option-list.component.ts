import { Component } from '@angular/core';
import { OptionsService } from '../../core/services/options.service';
import { Observable } from 'rxjs';
import { ProductOption } from 'src/app/core/models/ProductOption';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.css']
})
export class OptionListComponent {

  optionList$: Observable<ProductOption[]>;

  constructor(private optionsService: OptionsService, private router: Router){
    this.optionList$ =this.optionsService.getOptions();
  }

  goToDetails(id?: number){
    this.router.navigateByUrl('options/details/'+id);
  }

}

import { Component } from '@angular/core';
import { OptionsService } from '../../core/services/options.service';
import { Observable, of } from 'rxjs';
import { ProductOption } from 'src/app/core/models/ProductOption';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.css']
})
export class OptionListComponent {

  optionList$: Observable<ProductOption[]> = of([]);

  constructor(private optionsService: OptionsService,private toaster: ToastrService, private router: Router){
    this.getOptionList();
  }

  goToDetails(id?: number){
    this.router.navigateByUrl('options/details/'+id);
  }

  getOptionList(){
    this.optionList$ = this.optionsService.getOptions();
  }


  deleteOption(optionId?: number){

    this.optionsService.deleteOption(optionId as number).subscribe(
      (res) => {
        this.toaster.success('Option was deleted sucessfully');
        this.getOptionList();
      },
      (err) => this.toaster.error(err.error)
    )
  }

}

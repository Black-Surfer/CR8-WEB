import { Component } from '@angular/core';
import { ProductOption } from 'app/core/models/product-option';
import { ProductOptionService } from 'app/services/product-option.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-option-list',
  standalone: true,
  imports: [],
  templateUrl: './option-list.component.html',
  styleUrl: './option-list.component.scss',
})
export class OptionListComponent {
  optionList$: Observable<ProductOption[]>;

  constructor(
    private productOptionService: ProductOptionService,
    private toastr: ToastrService
  ) {
    this.getOptionList();
  }

  getOptionList() {
    this.optionList$ = this.productOptionService.getOptions();
  }

  deleteOption(optionId?: number) {
    this.productOptionService.deleteOption(optionId as number).subscribe(
      (res) => {
        this.toastr.success('Option was deleted sucessfully');
        this.getOptionList();
      },
      (err) => this.toastr.error(err.error)
    );
  }
}

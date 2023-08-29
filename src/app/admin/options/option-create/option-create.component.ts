import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ProductOptionService } from 'src/app/core/services/productOption.service';
import { ProductOptionForm } from '../../core/model/Request/ProductOptionForm';
import { ProductOption } from '../../core/model/ProductOption';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-create',
  templateUrl: './option-create.component.html',
  styleUrls: ['./option-create.component.css']
})
export class OptionCreateComponent {

  constructor(private fb: FormBuilder, private optionService: ProductOptionService,
    private router: Router, private toaster: ToastrService) {

  }

  createOptionForm = this.fb.group({
    name: ['', Validators.compose([Validators.required])],
    description: ['', Validators.compose([Validators.required])],
    productOptionTypes: this.fb.array([])
  })

  get name() {
    return this.createOptionForm.get('name');
  }

  get optionTypeForms() {
    return this.createOptionForm.get('productOptionTypes') as FormArray;
  }

  get description() {
    return this.createOptionForm.get('description');
  }


  addOptionTypes() {
    this.optionTypeForms.push(this.fb.group(
      {
        name: ['', Validators.required]
      }
    ))
  }

  removeOptionTypeForm(id: number) {
    this.optionTypeForms.removeAt(id);
  }



  createOption() {
    const { name, description, productOptionTypes } = this.createOptionForm.value;
    const payload: ProductOptionForm = {
      name: name as string,
      description: description as string,
      productOptionTypes: productOptionTypes as ProductOption[]
    }
    this.optionService.CreateProductOption(payload).subscribe(
      (res) => { 
        this.toaster.success('option has been created');
        this.router.navigateByUrl('list');
       },
      (err) => this.toaster.error(err.error)
    )
  }

}

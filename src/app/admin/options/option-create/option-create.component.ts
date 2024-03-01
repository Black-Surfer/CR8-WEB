import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ProductOptionService } from 'src/app/core/services/productOption.service';
import { ProductOptionForm } from '../../core/model/Request/ProductOptionForm';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductOption } from 'src/app/core/models/ProductOption';

@Component({
  selector: 'app-option-create',
  templateUrl: './option-create.component.html',
  styleUrls: ['./option-create.component.css']
})
export class OptionCreateComponent implements OnInit {

  optionId: number = 0;
  isEditMode: boolean =false;

  
  createOptionForm = this.fb.group({
    name: ['', Validators.compose([Validators.required])],
    description: ['', Validators.compose([Validators.required])],
    productOptionTypes: this.fb.array([])
  })

  constructor(private fb: FormBuilder, private optionService: ProductOptionService,
    private router: Router, private toaster: ToastrService, private activatedRoute: ActivatedRoute) {
     
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.optionId = Number(params.get('id'));
        if(this.optionId != 0){
          this.isEditMode = true;
          this.getOption(this.optionId);
        }
      }
    )
  }

  getOption(optionId: number){
    this.optionService.GetProductOption(optionId).subscribe(
      res => this.popuplateOptionForm(res),
      err => console.log(err)
    );
  }

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
        id: [this.optionId],
        name: ['', Validators.required]
      }
    ))
  }

  removeOptionTypeForm(id: number) {
    this.optionTypeForms.removeAt(id);
  }

  popuplateOptionForm(option:ProductOption){
    const optionDetsArray = option.productOptionTypes.map((types) => 
    this.fb.group({
      id: types.id,
      name: types.name,
      Validators: [Validators.required]
    }));
    this.createOptionForm.setControl('productOptionTypes', this.fb.array(optionDetsArray) as FormArray);
    this.createOptionForm.patchValue({
      name: option.name,
      description: option.description
    });
  }

  submit() {
    const { name, description, productOptionTypes } = this.createOptionForm.value;
    const payload: ProductOption = {
      id: this.optionId,
      name: name as string,
      description: description as string,
      productOptionTypes: productOptionTypes as ProductOption[]
    }
    if(!this.isEditMode){ 
      this.optionService.AddProductOption(payload).subscribe(
      (res) => { 
        this.toaster.success('option has been created');
        this.router.navigateByUrl('/admin/options/list');
       },
      (err) => this.toaster.error(err.error)
    )
    }else{
      this.optionService.EditProductOption(payload).subscribe(
        (res) => { 
          this.toaster.success('option has been updated')
         },(err) => this.toaster.error(err.error)
         )
    }
   
  }

}

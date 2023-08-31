import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductOption } from 'src/app/core/models/ProductOption';
import { OptionsService } from '../../core/services/options.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-option-details',
  templateUrl: './option-details.component.html',
  styleUrls: ['./option-details.component.css']
})
export class OptionDetailsComponent implements OnInit {
  id?: string;

  constructor(private optionsService: OptionsService,private fb: FormBuilder, private activatedRoute: ActivatedRoute){
  }

  optionDetailsForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    productOptionTypes: this.fb.array([])
  })


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
      this.optionsService.getOption(this.id).subscribe(
        (res) => {
          const {name, description, productOptionTypes} = res;          
          this.optionDetailsForm.setValue({name ,description,productOptionTypes});
        }
      )
    });  
  }
  

}

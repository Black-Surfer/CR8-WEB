import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductOption } from 'src/app/core/models/ProductOption';
import { OptionsService } from '../../core/services/options.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-option-details',
  templateUrl: './option-details.component.html',
  styleUrls: ['./option-details.component.css']
})
export class OptionDetailsComponent implements OnInit {
  id?: string;
  optionDetail$?: Observable<ProductOption>;

  constructor(private optionsService: OptionsService, private activatedRoute: ActivatedRoute){
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
      this.optionDetail$ = this.optionsService.getOption(this.id);
    });  
  }
  

}

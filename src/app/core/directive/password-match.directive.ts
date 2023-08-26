import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from "@angular/forms";


@Directive({
  selector: '[appPasswordMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true }]
})
export class PasswordMatchDirective implements Validator {

  @Input('appPasswordMatch') matchControlName: string;
  constructor(){
      this.matchControlName = '';
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const matchControl = control?.parent?.get(this.matchControlName);
    if (matchControl && control.value !== matchControl.value) {
      return { passwordMismatch: true };
    }

    return null;
  }
}

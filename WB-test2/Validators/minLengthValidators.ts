import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function minLengthValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    return value.length < minLength ? { minLength: { requiredLength: minLength, actualLength: value.length } } : null;
  };
}

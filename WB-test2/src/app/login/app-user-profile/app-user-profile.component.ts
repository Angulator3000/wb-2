import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { minLengthValidator } from '../../../../Validators/minLengthValidators';

@Component({
  selector: 'app-app-user-profile',
  templateUrl: './app-user-profile.component.html',
  styleUrl: './app-user-profile.component.scss'
})
export class AppUserProfileComponent {

  public vhodGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, minLengthValidator(2)]),
    lastName: new FormControl('', [Validators.required, minLengthValidator(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthday: new FormControl('')
  });


save(){
if (this.vhodGroup.valid) {
  console.log(this.vhodGroup.value)

}
}
}

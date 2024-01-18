import { Component, ViewChild } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent {
  @ViewChild('f', { static: true }) formSignUp: NgForm;

  onSubmit() {
    if (this.formSignUp.valid) {
      console.log(this.formSignUp.value);
      // Add logic here for what happens when the form is valid and submitted
      this.formSignUp.reset();
    }
  }
}
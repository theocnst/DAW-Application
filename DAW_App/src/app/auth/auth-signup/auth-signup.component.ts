import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent {
  @ViewChild('f', { static: true }) formSign: NgForm;


  onSubmit() {
    console.log(this.formSign);

    this.formSign.reset();
  }

}

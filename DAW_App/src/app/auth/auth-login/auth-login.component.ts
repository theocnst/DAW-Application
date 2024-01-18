import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent {
  @ViewChild('f', {static: true}) formLogin : NgForm;

  onSubmit() {
    console.log(this.formLogin);

    this.formLogin.reset();
  }
}

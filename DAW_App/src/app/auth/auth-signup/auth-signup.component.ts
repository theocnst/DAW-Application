import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http';

declare var bootstrap: any;

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements AfterViewInit {
  @ViewChild('f', { static: true }) formSignUp: NgForm;
  @ViewChild('errorModal', { static: true }) errorModal: ElementRef<HTMLDivElement>;
  private modal: any;
  errorMessage: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.modal = new bootstrap.Modal(this.errorModal.nativeElement);
  }

  onSubmit() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailValid = emailRegex.test(this.formSignUp.value.email);
    const passwordValid = this.formSignUp.value.password.trim().length >= 4;

    if (!emailValid || !passwordValid) {
      this.errorMessage = 'Please ensure the email is valid and the password is at least 4 characters.';
      this.modal.show();
      return;
    }

    if (this.formSignUp.valid) {
      const newUser: User = {
        username: this.formSignUp.value.username.trim(),
        email: this.formSignUp.value.email.trim(),
        password: this.formSignUp.value.password.trim(),
      };

      this.userService.register(newUser).subscribe({
        next: (user) => {
          this.authService.login(user);
          this.router.navigate(['/home']);
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 409) {
            this.errorMessage = 'A user with this email already exists. Please use a different email.';
          } else {
            this.errorMessage = 'Registration failed. Please try again.';
          }
          this.modal.show();
          console.error(error);
        }
      });
    }
  }
}

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

declare var bootstrap: any; // Declare Bootstrap's namespace

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements AfterViewInit {
  @ViewChild('f', { static: true }) formLogin: NgForm;
  @ViewChild('errorModal') errorModal: ElementRef<HTMLDivElement>;
  private modal: any;

  email!: string;
  password!: string;
  errorMessage!: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    if (this.errorModal && this.errorModal.nativeElement) {
      this.modal = new bootstrap.Modal(this.errorModal.nativeElement);
    }
  }

  onSubmit() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailValid = emailRegex.test(this.formLogin.value.email);
    const passwordValid = this.formLogin.value.password.trim().length >= 4;

    if (!emailValid || !passwordValid) {
      this.errorMessage = 'Invalid credentials. Please check your email and password.';
      if (this.modal) {
        this.modal.show();
      }
      return;
    }

    if (this.formLogin.valid) {
      this.userService.login(this.formLogin.value.email.trim(), this.formLogin.value.password.trim())
        .subscribe({
          next: (user) => {
            this.authService.login(user);
            this.router.navigate(['/home']);
          },
          error: (error: HttpErrorResponse) => {
            if (error.status === 404) {
              this.errorMessage = 'User not found. Please check your credentials.';
              this.modal.show();
            } else {
              this.errorMessage = 'An error occurred during login. Please try again.';
              this.modal.show();
            }
            console.error(error);
          }
        });
    }
  }
}

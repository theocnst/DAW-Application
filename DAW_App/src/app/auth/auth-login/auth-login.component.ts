import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  @ViewChild('f', { static: true }) formLogin: NgForm;

  email!: string;
  password!: string;
  errorMessage!: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.formLogin.valid) {
      this.userService.login(this.formLogin.value.email, this.formLogin.value.password)
        .subscribe({
          next: (user) => {
            this.authService.login(user);
            this.router.navigate(['/home']);
          },
          error: (error) => {
            // Aici poți gestiona diferite tipuri de erori
            this.errorMessage = 'An error occurred during login. Please try again.';
            console.error(error);
          }
        });
    }
  }
}

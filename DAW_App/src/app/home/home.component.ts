import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(['/auth/login']);
    }
  }
}

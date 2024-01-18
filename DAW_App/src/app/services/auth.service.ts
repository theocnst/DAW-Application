import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isUserLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
  }
}

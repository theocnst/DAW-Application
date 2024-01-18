import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.isUserLoggedIn());

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  private isUserLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  login(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));

    this.loggedIn.next(true);
  }

  logout(): void {
    localStorage.removeItem('user');

    this.loggedIn.next(false);
  }
}
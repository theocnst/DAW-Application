import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseURL: string = "https://localhost:7266/api/User";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}/GetUsers`);
  }

  getUser(email: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/GetUser/${email}`);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/GetUserById/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/CreateUser`, user, this.httpOptions);
  }

  editUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL}/EditUser`, user, this.httpOptions);
  }

  deleteUser(email: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseURL}/DeleteUser/${email}`);
  }

  login(email: string, password: string): Observable<User> {
    const loginUrl = `${this.baseURL}/Login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    console.log(loginUrl);
    return this.httpClient.post<User>(loginUrl, this.httpOptions);
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/Register`, user, this.httpOptions);
  }
}
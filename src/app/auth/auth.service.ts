import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() {}

  // Simulate user registration
  register(username: string, password: string): Observable<any> {
    // Assume the registration is always successful
    return of({ success: true, username });
  }

  // Simulate user login
  login(username: string, password: string): Observable<boolean> {
    // This is a simple simulation: in a real app, you would make an HTTP request here
    return of(true).pipe(tap(val => this.isAuthenticated = val));
  }

  // Simulate user logout
  logout(): void {
    this.isAuthenticated = false;
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}


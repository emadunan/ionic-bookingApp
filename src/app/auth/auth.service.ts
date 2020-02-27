import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userIsAuthenticated = false;

  constructor() { }

  Login() {
    this.userIsAuthenticated = true;
  }

  Logout() {
    this.userIsAuthenticated = false;
  }
}

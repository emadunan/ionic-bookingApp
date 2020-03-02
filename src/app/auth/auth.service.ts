import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userIsAuthenticated = false;
  private _userId = 'abc';

  get userId() {
    return this._userId;
  }

  constructor() { }

  Login() {
    this.userIsAuthenticated = true;
  }

  Logout() {
    this.userIsAuthenticated = false;
  }
}

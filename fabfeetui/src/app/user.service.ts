import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public loginStatus = 0;
  setLoginStatus(status: number) {
    this.loginStatus = status;
  }
}

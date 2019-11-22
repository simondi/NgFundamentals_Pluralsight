import { Injectable } from '@angular/core';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;
  
  constructor() { }

  loginUser(userName: string, password: string ){
    this.currentUser = {
      id: 1,
      firstName: "simon",
      lastName: "Di",
      userName: "sdi"
    }
  }
  
  isAuthenticated() {
    return !!this.currentUser;
  }
}

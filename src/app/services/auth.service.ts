import { Injectable } from '@angular/core';
import { IUser } from '../models';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;
  
  constructor(private router: Router) { }

  loginUser(userName: string, password: string ){
    this.currentUser = {
      id: 1,
      firstName: "simon",
      lastName: "Di",
      userName: "userName"
    };
    console.log('This user is just logged in: '+ userName);
  }

  updateCurrentUser(firstName: string, lastName: string ){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  logout(){
    this.currentUser = null;
    this.router.navigate(["/user/login"]);
  }
}

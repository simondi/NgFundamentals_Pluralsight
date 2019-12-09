import { Injectable } from '@angular/core';
import { IUser } from '../models';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from  'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;
  
  constructor(private router: Router,
      private http : HttpClient) { }

  loginUser(userName: string, password: string ){
    let loginInfo= {username: userName, password: password};
    let options ={ headers: new HttpHeaders({'Content_Type': 'application/json'})}
    return this.http.post('api/login', loginInfo, options)
      .pipe(tap( data => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err=> {
        return of(false);
      }))
  }

  updateCurrentUser(firstName: string, lastName: string ){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    let options ={ headers: new HttpHeaders({'Content_Type': 'application/json'})}
    return this.http.put(`api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationstatus() {
    this.http.get('api/currentIdentity')
    .pipe(tap(data=> {
      if(data instanceof Object)  {
        this.currentUser = <IUser> data;
      }
    }))
    .subscribe();
  }

  logout(){
    this.currentUser = null;
    this.router.navigate(["/user/login"]);
  }
}

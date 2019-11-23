import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  mouseOverLogin : boolean;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    console.log(formValues);
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['user/profile']);
  }
  cancel(){
    this.router.navigate(['events']);
  }

}

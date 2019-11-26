import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;
  mouseOverLogin : boolean;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValue) {
    console.log('Hello, '+ formValue.userName + ' '+  formValue.password);
    this.authService.loginUser(formValue.userName, formValue.password);
    this.router.navigate(['user/profile']);
  }
  cancel(){
    this.router.navigate(['events']);
  }

}

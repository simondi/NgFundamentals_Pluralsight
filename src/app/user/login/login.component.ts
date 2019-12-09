import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, ToastrService } from 'src/app/services/index';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;
  mouseOverLogin : boolean;
  loginInvalid : boolean = false;
  
  constructor(private authService: AuthService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  login(formValue) {
    this.authService.loginUser(formValue.userName, formValue.password)
      .subscribe(response => {
        if (!response) {
          this. loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      })
    this.router.navigate(['user/profile']);
    this.toastr.success("Welcome, "+ formValue.userName);
  }
  cancel(){
    this.router.navigate(['events']);
    this.toastr.success("You loggedout successfully");
  }

}

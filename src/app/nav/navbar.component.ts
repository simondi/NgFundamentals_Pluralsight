import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services'
import { Router } from '@angular/router';
import { IUser } from '../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls:  ['./navbar.component.css']
})

export class NavBarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() { 


  }


  logout(){
    this.authService.logout();
    this.router.navigate(['user/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthService, EventService} from '../services'
import { Router } from '@angular/router';
import { IUser, ISession } from '../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls:  ['./navbar.component.css']
})

export class NavBarComponent implements OnInit {

  searchTerm : string="";
  foundSessions: ISession[];

  constructor(private authService: AuthService, 
    private router: Router,
    private eventService: EventService) { }

  ngOnInit() { 

  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(session =>{
      this.foundSessions = session;
      console.log(this.foundSessions);  
    })
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['user/login']);
  }
}

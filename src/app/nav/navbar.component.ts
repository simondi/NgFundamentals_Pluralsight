import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls:  ['./navbar.component.css']
})

export class NavBarComponent implements OnInit {
  constructor(private authservice: AuthService) { }

  ngOnInit() { }
}

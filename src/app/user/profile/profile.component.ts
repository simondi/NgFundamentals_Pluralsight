import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm : FormGroup;

  constructor() { }

  ngOnInit() {
    let firstName = new FormControl();
    let lastName = new FormControl();
    this.profileForm = new FormGroup({
      firstName : firstName,
      lastName: lastName
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService} from '../../services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm : FormGroup;

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit() {
    let firstName = new FormControl(
      this.authservice.currentUser.firstName
    );
    let lastName = new FormControl(
      this.authservice.currentUser.lastName
    );
    this.profileForm = new FormGroup({
      firstName : firstName,
      lastName: lastName
    });
  }

  saveProfile(formValues){
    this.authservice.updateCurrentUser(formValues.firstName, formValues.lastName);
  }

  cancel(){
    this.router.navigate(['/events'])
  }

}

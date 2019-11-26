import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService} from '../../services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm : FormGroup;
  firstName : FormControl;
  lastName : FormControl;
  authenticated: boolean = true;

  constructor(private router: Router, private authService: AuthService ) { }

  ngOnInit() {
    this.authenticated =!!this.authService.currentUser;

    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName : this.firstName,
      lastName: this.lastName
    });
    console.log('This is init on Profile: ' + this.authService.currentUser.firstName +' '+ this.authService.currentUser.lastName);
    console.log('This is init on Profile: ' + this.firstName.value +' '+ this.lastName.value);
  }

  saveProfile(form){
    this.authService.updateCurrentUser(form.value.firstName, form.value.lastName);
    this.router.navigate(['/events']);
  }

  cancel(){
    this.router.navigate(['/events'])
  }
}

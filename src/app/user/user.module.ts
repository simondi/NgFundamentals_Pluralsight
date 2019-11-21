import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@NgModule (
    {
        imports: [
            CommonModule,
            RouterModule.forChild(UsrRoutes)
        ],
        declarations:[
            ProfileComponent
        ],
        providers: [

        ]
    })

export class userModule{}
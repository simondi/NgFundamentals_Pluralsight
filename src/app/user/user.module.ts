import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { FormsModule } from '@angular/forms';

import {  
    ProfileComponent, 
    LoginComponent
} from './index';

@NgModule (
    {
        imports: [
            CommonModule,
            RouterModule.forChild(userRoutes),
            FormsModule
        ],
        declarations:[
            ProfileComponent,
            LoginComponent
        ],
        providers: [

        ]
    })

export class UserModule{}
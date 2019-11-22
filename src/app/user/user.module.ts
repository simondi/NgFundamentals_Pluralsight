import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  
    ProfileComponent, 
    LoginComponent
} from './index';

@NgModule (
    {
        imports: [
            CommonModule,
            RouterModule.forChild(userRoutes),
            FormsModule,
            ReactiveFormsModule
        ],
        declarations:[
            ProfileComponent,
            LoginComponent
        ],
        providers: [

        ]
    })

export class UserModule{}
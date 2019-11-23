import { 
    ProfileComponent,
    LoginComponent,
 } from './index';

 import { Routes } from '@angular/router';

export const userRoutes : Routes=[
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
]
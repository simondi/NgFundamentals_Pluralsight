import { Routes } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { 
    //EventRouteActivatorService,
    EventListResolverService,
    EventResolverService } 
from './services/index';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent
} from './events/index'

export const appRoutes : Routes  =[
    {path: 'events', component: EventsListComponent, 
        resolve: {events: EventListResolverService} },
    {path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent'] },
    {path: 'events/:id', component: EventDetailsComponent, 
        resolve: {event: EventResolverService}  },
    {path: 'events/:id/new', component: CreateSessionComponent, 
        resolve: {event: EventResolverService} },
    {path: '404', component: Error404Component },
    {path: '', redirectTo: '/events', pathMatch: 'full' },
    {path: 'user', loadChildren: './user/user.module#UserModule'}
]

import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventRouteActivatorService } from './services/event-route-activator.service';

export const appRoutes : Routes  =[
    {path: 'events', component: EventsListComponent },
    {path: 'events/new', component: CreateEventComponent },
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    {path: '404', component: Error404Component },
    {path: '', redirectTo: '/events', pathMatch: 'full' }
]

import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventRouteActivatorService } from './services/event-route-activator.service';
import { EventListResolverService } from './services/event-list-resolver.service';

export const appRoutes : Routes  =[
    {path: 'events', component: EventsListComponent, 
        resolve: {events: EventListResolverService} },
    {path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent'] },
    {path: 'events/:id', component: EventDetailsComponent, 
        canActivate: [EventRouteActivatorService] },
    {path: '404', component: Error404Component },
    {path: '', redirectTo: '/events', pathMatch: 'full' }
]

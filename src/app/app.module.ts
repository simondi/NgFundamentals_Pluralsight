import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent
} from './events/index'

import {
  EventListResolverService,
  EventService,
  ToastrService,
  EventRouteActivatorService
} from './services/index'

import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './app.router'
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers :[
    EventService, 
    ToastrService,
    EventRouteActivatorService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolverService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if( component.isDirty)
    return window.confirm('You have not saved this event. Do you really want to cancel?');
  return true;  
}

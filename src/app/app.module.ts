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
  EventRouteActivatorService,
  AuthService
} from './services/index'

import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './app.router'
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
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
    EventListResolverService,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if( component.isDirty)
    return window.confirm('You have not saved this event. Do you really want to cancel?');
  return true;  
}

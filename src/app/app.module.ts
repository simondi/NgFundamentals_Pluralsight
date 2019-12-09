import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  SessionListComponent ,
  CreateSessionComponent
} from './events/index'

import {
  EventListResolverService,
  EventResolverService,
  EventService,
  ToastrService,
  TOASTR_TOKEN, Toastr,
  JQ_TOKEN,
 // EventRouteActivatorService,
  AuthService,
  DurationPipe
} from './services/index'

import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './app.router'
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { HttpClientModule } from '@angular/common/http';

let toastr: Toastr = window['toastr'];  // for TOASTR-TOKEN
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    CreateSessionComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers :[
    EventService, 
    ToastrService,
    //EventRouteActivatorService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    {provide: TOASTR_TOKEN, useValue: toastr },
    {provide: JQ_TOKEN, useValue: jQuery },
    EventListResolverService,
    EventResolverService,
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

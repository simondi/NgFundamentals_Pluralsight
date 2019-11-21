import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './services/event.service';
import { ToastrService } from './services/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {appRoutes } from './app.router'
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';

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
    CreateEventComponent
  ],
  providers :[EventService, ToastrService], 
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

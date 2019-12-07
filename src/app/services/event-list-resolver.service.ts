import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor (private eventService: EventService){
  }

  resolve() { 
    // Here we use map to return observable in stead of using subscribe to return a subscription.
    return this.eventService.getEvents();
  }
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './event.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<any> {

  constructor (private eventService: EventService){
  }

  resolve(route: ActivatedRouteSnapshot) { 
    // Here we use map to return observable in stead of using subscribe to return a subscription.
    return this.eventService.getEvent(route.params['id']);
  }
}

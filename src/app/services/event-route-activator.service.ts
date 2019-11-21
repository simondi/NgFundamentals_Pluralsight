import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../services/event.service';


@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService {

  constructor(private eventService: EventService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot)
  {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);
    if (!eventExists)
      this.router.navigate(['/404']);
    return eventExists;
  }
}

import { Component, OnInit } from '@angular/core';
import { EventService, ToastrService } from '../services/index';
import { map } from 'rxjs/operators'
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { IEvent } from '../models/index'
 

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor(private eventService: EventService, 
    private toastr: ToastrService,
    private route: ActivatedRoute) {
  }

  ngOnInit()  {
     //this.eventService.getEvents().subscribe(events=>{this.events=events});
     // get the data from the EventList resolver route:
     this.events = this.route.snapshot.data['events'];
     // Here the 'events' is matching the event in the route of 
    console.log("Hello"+ this.events.length)
  }

  handleThunbnailClick(eventName){
    this.toastr.success("the event name is: "+eventName);
  }

}

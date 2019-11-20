import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
 
declare let toastr;
@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any[];

  constructor(private eventService: EventService) {
  }

  ngOnInit()  {
    this.events = this.eventService.getEvents();
    console.log("Hello"+ this.events.length)
  }

  handleThunbnailClick(eventName){
    toastr.success(eventName);
  }

}

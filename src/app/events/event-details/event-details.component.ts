import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../../models/index';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventId: number;
  event: IEvent;
  addSessionMode: boolean;
  filterBy: string='all';
  sortBy: string='name';

  constructor(private eventService : EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.params['id'];
    //this.event = this.eventService.getEvent(+this.eventId);
    // this.route.params.forEach((params: Params) => {
    //   this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
    //     this.event=event;
    //   })
    // })
    this.route.data.forEach((data) => {
      this.event = data['event'];
    })
    this.addSessionMode = false;
  }

  addSession(){
    this.addSessionMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id));
    session.id = nextId+1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addSessionMode = false;
  }

  cancelAddSession(){
    this.addSessionMode = false;
  }

}

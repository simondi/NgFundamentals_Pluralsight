import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private eventService : EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.params['id'];
    this.event = this.eventService.getEvent(+this.eventId);
    this.addSessionMode = false;
  }

  addSession(){
    this.addSessionMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id));
    session.id = nextId+1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addSessionMode = false;
  }

}

import { Component, OnInit, Output } from '@angular/core';
import { ISession } from '../../models/index';
import { EventEmitter } from 'events';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.resenter,
      abstract: formValues.abstract,
      voters:[]
    }
    this.saveNewSession.emit(session);
  }

}

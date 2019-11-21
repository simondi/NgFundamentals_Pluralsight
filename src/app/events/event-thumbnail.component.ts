import { Component, OnInit, Input, EventEmitter, Output, Pipe } from '@angular/core';
import { IEvent } from '../models/index'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: [ './event-thumbnail.component.css'  ]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;

  constructor() {}

  ngOnInit() {}

  getStartTimeStyle(): any {

    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return {};

  }
}

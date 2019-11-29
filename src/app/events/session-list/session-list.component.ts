import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession} from '../../models/index';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: ISession[];
  @Input() filterBy: string; 

  visibleSessions: ISession[]=[];

  constructor() { }

  ngOnInit() {
    this.visibleSessions = this.sessions.slice(0);
  }

  ngOnChanges() {
    if (this.sessions){
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter) {
    if (filter==='all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(s=> {
        return s.level.toLowerCase() == filter;
      })
    }
  }

}

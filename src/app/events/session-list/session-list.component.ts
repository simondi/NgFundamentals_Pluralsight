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
  @Input() sortBy: string; 

  visibleSessions: ISession[]=[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy==='name'? this.visibleSessions.sort(sorByNameAsc) :
      this.visibleSessions.sort(sorByVoteDesc)
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

function sorByNameAsc(s1:ISession, s2: ISession) {
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
}

function sorByVoteDesc(s1:ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}

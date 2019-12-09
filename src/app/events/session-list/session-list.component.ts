import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession} from '../../models/index';
import { AuthService, VoterService }  from '../../services/index';
import {  } from '../../user/index';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: ISession[];
  @Input() filterBy: string; 
  @Input() sortBy: string; 
  @Input() eventId: number; 

  visibleSessions: ISession[]=[];

  constructor(private voterService: VoterService, private auth: AuthService ) { }

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

  toggleVoter(session: ISession){
    if (this.userHasVoted(session))
    {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName)
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }
    if (this.sortBy==='voters')
    {
      this.visibleSessions.sort(sorByVoteDesc);
    }
  }

  userHasVoted(session: ISession) : boolean  {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
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

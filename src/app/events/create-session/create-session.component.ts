import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISession } from '../../models/index';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  newSessionForm = new FormGroup({
    name: new FormControl,
    presenter: new FormControl('',Validators.required),
    duration: new FormControl('',Validators.required),
    level: new FormControl('',Validators.required),
    abstract: new FormControl('',Validators.required)
  })
  

  constructor() { }

  ngOnInit() {

  }

  saveSession() {
    let session: ISession = {
      id: undefined,
      name: this.newSessionForm.value.name,
      duration: +this.newSessionForm.value.duration,
      level: this.newSessionForm.value.level,
      presenter: this.newSessionForm.value.resenter,
      abstract: this.newSessionForm.value.abstract,
      voters:[]
    }
    
    console.log(session);
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit;
  }

}

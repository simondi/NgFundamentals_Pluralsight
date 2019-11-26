import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services'
import { IEvent } from 'src/app/models';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty : boolean = false;
  event: any;
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.event = {
      id: 988,
      name : 'NG Spectacular',
      date: new Date('8/8/2019'),
      time: '10am',
      price: 275,
      location: {
          address: '123 Touting drive',
          city: 'Vancouver',
          country: 'USA'
        },
      onlineUrl: 'http://www.uvic.ca/',
      imageUrl:''
      };
  }

  saveEvent(formValues: any){
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);  
  }

  cancel() {
    this.router.navigate(['/events']);  
  }

}

import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  eventsSubject: Subject<any>;
  eventGroups$: Observable<any>;
  ngOnInit() {
    this.eventsSubject = new Subject<any>();

    this.eventGroups$ = this.eventsSubject
      .map((item) => {
        console.log(item);
      });

    this.eventsSubject.next('test1');
  }

  sendtest() {
    this.eventsSubject.next('test from button');
  }
}

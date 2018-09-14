import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  listDataMap = {
    eight: [
      {type: 'warning', content: 'warning event.'},
      {type: 'success', content: 'usual event.'}
    ],
    ten: [
      {type: 'warning', content: 'warning event.'},
      {type: 'success', content: 'usual event.'},
      {type: 'error', content: 'error event.'}
    ],
    eleven: [
      {type: 'warning', content: 'This is warning event'},
      {type: 'success', content: 'This is very long usual event........'},
      {type: 'error', content: 'This is error event 1.'},
    ]
  };
  date;
  mode = 'month';
  constructor() {
  }

  ngOnInit() {
    this.date = new Date();
    console.log(this.date);
  }


  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }
}

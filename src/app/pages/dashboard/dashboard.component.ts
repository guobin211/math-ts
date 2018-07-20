import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  routeMsg;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // '仪表盘'
    this.routeMsg = this.routeInfo.data['_value'][0].ulName;

  }

}

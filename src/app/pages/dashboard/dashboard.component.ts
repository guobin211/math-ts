import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  routeMsg;
  httpData;

  constructor(private routeInfo: ActivatedRoute, private http: Http) {
  }

  ngOnInit() {
    // '仪表盘'
    this.routeMsg = this.routeInfo.data['_value'][0].ulName;
    this.http.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1")
      .subscribe((data) => {
        this.httpData = JSON.parse(data['_body']).result;
        // console.log(this.httpData);
      });

  }

}

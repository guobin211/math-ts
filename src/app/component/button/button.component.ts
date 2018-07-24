import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  size = 'large';

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // 获取路由导航信息
    // console.log(this.routeInfo.snapshot.queryParams['name'])
  }

}

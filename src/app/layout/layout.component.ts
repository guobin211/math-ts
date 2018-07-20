import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // 侧边栏默认收起
  isCollapsed = true;
  // 自定义 trigger，设置为 null 时隐藏 trigger 菜单小图标
  triggerTemplate = null;
  contentUl;
  showUserInfo = false;

  constructor(private route: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.activateRoute.snapshot.queryParams['name']) {
      this.contentUl = [];
      this.contentUl = [this.activateRoute.snapshot.queryParams['name']]
    } else {
      this.contentUl = ['主页', '仪表盘'];
    }
  }

  goAnother(msg: string, li: string) {
    this.contentUl.splice(0, 2, msg, li);
  }

  changeShow() {
    this.showUserInfo = !this.showUserInfo;
  }
}

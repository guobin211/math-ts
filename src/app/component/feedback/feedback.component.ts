import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  isVisibleTop = false;
  isVisibleMiddle = false;

  constructor(private notification: NzNotificationService) {
  }

  ngOnInit() {

  }

  // 创建消息提示框
  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }

  showModalTop(): void {
    this.isVisibleTop = true;
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkTop(): void {
    console.log('点击了确定');
    this.isVisibleTop = false;
  }

  handleCancelTop(): void {
    this.isVisibleTop = false;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}

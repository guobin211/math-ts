import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {NzMessageService} from "ng-zorro-antd";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  newsData;
  url = "http://127.0.0.1:8000/api/news";
  isVisible = false;
  isOkLoading = false;
  modalTitle;
  modalContent = [];
  constructor(private http: Http, private nzMessageService: NzMessageService) {
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(
      (data) => {
        /** data 响应体 **/
        this.newsData = JSON.parse(data['_body']).result.data;
      },
      () => {
      },
      () => {
      }
    )
  }

  showModal(i): void {
    this.modalTitle = i.title;
    this.modalContent.push(i.thumbnail_pic_s);
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    window.setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  doSeting(i) {
    console.log(i);
  }

  doComment(i) {
    this.modalTitle = '';
    this.modalContent = [];
    this.showModal(i);
  }

  doShare() {

  }

  cancel(): void {
    this.nzMessageService.info('取消操作');
  }

  confirm(): void {
    this.nzMessageService.info('确认取消订阅');
  }

}

import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-quilledit',
  templateUrl: './quilledit.component.html',
  styleUrls: ['./quilledit.component.scss']
})
export class QuilleditComponent implements OnInit {

  editData;
  // img文件自动转换为base64编码
  placeholderText = '请输入文字';
  maxLengthNum;
  minLengthNum;

  constructor(private elementref: ElementRef) {
  }

  ngOnInit() {

  }

  doSubmit(data) {
    console.log(data);
  }

  doClear() {
    this.editData = '';
  }

}

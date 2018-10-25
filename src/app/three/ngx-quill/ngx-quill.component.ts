import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngx-quill',
  templateUrl: './ngx-quill.component.html',
  styleUrls: ['./ngx-quill.component.less']
})
export class NgxQuillComponent implements OnInit {
  formatData: string;
  config = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      // ['bold', 'italic', 'underline', 'strike'],         // toggled buttons
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['blockquote', 'code-block'],
      // [{ 'header': 1 }, { 'header': 2 }],                // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],          // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],              // outdent/indent
      // [{ 'direction': 'rtl' }],                          // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],      // custom dropdown
      [{ 'color': [] }, { 'background': [] }],              // dropdown with defaults from theme
      // [{ 'font': [] }],
      [{ 'align': [] }],
      // ['clean'],                                         // remove formatting button
      ['link', 'image']
      // ['link', 'image', 'video']                         // link and image, video
    ]
  };
  constructor() { }
  ngOnInit() {
  }
  // 初始化
  setFocus(ev: any) {
    console.log(ev);
  }
  // 状态改变
  logChange(ev: any) {
    console.log(ev);
  }
  // tool下拉选择
  logSelection(ev: any) {
    console.log(ev);
  }
  // 提交数据
  doSubmit() {
    console.log(this.formatData);
  }

}

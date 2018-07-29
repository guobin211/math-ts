import {Component, OnInit} from '@angular/core';
import {EditormdConfig} from "./model/editormd-config";

@Component({
  selector: 'app-editormd',
  templateUrl: './editormd.component.html',
  styleUrls: ['./editormd.component.scss']
})
export class EditormdComponent implements OnInit {
  // 配置文件
  conf = new EditormdConfig();
  // 数据
  markdown = 'markdown文本编辑器';

  constructor() {
  }

  ngOnInit() {
  }

  // 同步属性内容
  syncModel(str): void {
    this.markdown = str;
  }

  doSubmit() {

  }
}

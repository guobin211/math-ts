import {AfterViewInit, Attribute, Directive, EventEmitter, Input, Output} from '@angular/core';
import {EditormdConfig} from "./model/editormd-config";
// 声明引入的第三方对象
declare var editormd: any;
declare var $: any;

@Directive({
  selector: '[appEditorMd]'
})
export class EditorMdDirective implements AfterViewInit {
  //  配置选项
  @Input() editormdConfig: EditormdConfig;
  //  发射器
  @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>();
  //  editormd编辑器
  editor: any;

  constructor(@Attribute('id') private id: string) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let out;
    let textArea;
    // 创建编辑器
    this.editor = editormd(this.id, this.editormdConfig);
    out = this.onEditorChange;
    // 获取textArea元素
    textArea = $('#' + this.id + ' :first');
    // 当编辑器内容改变时，触发textArea的change事件
    this.editor.on('change', function () {
      out.emit(textArea.val());
    });
    console.log(this.editor);
  }
}

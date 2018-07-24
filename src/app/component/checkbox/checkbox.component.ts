import {Component, OnInit} from '@angular/core';
import {NzMessageService, UploadFile} from "ng-zorro-antd";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  // 直接上传到服务器
  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage = '';
  previewVisible = false;
  // 多选框数据
  checkOptionsOne = [
    {label: 'Apple', value: 'Apple', checked: true},
    {label: 'Pear', value: 'Pear'},
    {label: 'Orange', value: 'Orange'}
  ];
  checkOptionsTwo = [
    {label: 'Apple', value: 'Apple'},
    {label: 'Pear', value: 'Pear', checked: true},
    {label: 'Orange', value: 'Orange'}
  ];
  checkOptionsThree = [
    {label: 'Apple', value: 'Apple', disabled: true, checked: true},
    {label: 'Pear', value: 'Pear', disabled: true},
    {label: 'Orange', value: 'Orange'}
  ];

  loading = false;
  avatarUrl: string;
  // 直接上传到服务器
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
  // 上传头像 限制上传文件大小
  beforeUpload = (file: File) => {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      this.msg.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.msg.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

  constructor(private msg: NzMessageService) {
  }

  ngOnInit() {
  }

  // 多选框
  log(value: object[]): void {
    console.log(value);
  }

  handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'uploading') {
      this.loading = true;
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, (img: string) => {
        this.loading = false;
        this.avatarUrl = img;
      });
    }
  }

  private getBase64(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
}

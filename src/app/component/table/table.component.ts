import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // 表格数据
  dataSet = [];
  bordered = false;
  loading = false;
  pagination = true;
  header = true;
  title = true;
  footer = true;
  fixHeader = false;
  size = 'small';
  expandable = true;
  checkbox = true;
  allChecked = false;
  indeterminate = false;
  displayData = [];
  simple = false;
  noResult = false;

  constructor() {
  }

  // 当前页面展示数据改变的回调函数
  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; expand: boolean; description: string; }>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  ngOnInit(): void {
    for (let i = 1; i <= 20; i++) {
      this.dataSet.push({
        key: `${i}`,
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked: false,
        expand: false
      });
    }
  }
  // 表格内容为空
  noResultChange(status: boolean): void {
    this.dataSet = [];
    if (!status) {
      this.ngOnInit();
    }
  }
  addDate() {
    let i = 100;
    // 增加数据
    this.dataSet = [...this.dataSet, {
      key: `${i}`,
      name: `增加的数据${i}`,
      age: '28',
      address: `New York No. ${i} Lake Park`
    }];
    i++;
  }
  delete(i) {
    // 删除数据
    this.dataSet = this.dataSet.filter(data => data.key !== i);
  }
}

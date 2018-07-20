import {Component, OnInit} from '@angular/core';
import {TableService} from "../../service/table.service";

@Component({
  selector: 'app-tableajax',
  templateUrl: './tableajax.component.html',
  styleUrls: ['./tableajax.component.scss']
})
export class TableajaxComponent implements OnInit {
  // 当前页
  pageIndex = 1;
  // 分页大小
  pageSize = 10;
  total = 1;
  // 元数据
  dataSet = [];
  // 加载中
  loading = true;
  // 排序
  sortValue = null;
  sortKey = null;
  filterGender = [
    {text: 'male', value: 'male'},
    {text: 'female', value: 'female'}
  ];
  searchGenderList: string[] = [];

  // ajax表格服务
  constructor(private randomUserService: TableService) {
  }

  sort(sort: { key: string, value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.searchData();
  }

  // 请求数据的方法
  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    // ajax请求数据
    this.randomUserService.getUsers(this.pageIndex, this.pageSize, this.sortKey, this.sortValue, this.searchGenderList).subscribe((data: any) => {
      this.loading = false;
      this.total = 200;
      this.dataSet = data.results;
    });
  }

  updateFilter(value: string[]): void {
    this.searchGenderList = value;
    this.searchData(true);
  }

  ngOnInit(): void {
    this.searchData();
  }

}

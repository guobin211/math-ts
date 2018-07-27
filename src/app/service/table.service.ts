import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  randomUserUrl = 'https://api.randomuser.me/';

  constructor(private http: HttpClient) {
  }

  getUsers(
    pageIndex: number = 1,
    pageSize: number = 10,
    sortField: string,
    sortOrder: string,
    genders: string[]
  ): Observable<{}> {
    // 构造查询参数
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', sortField)
      .append('sortOrder', sortOrder);
    genders.forEach(gender => {
      params = params.append('gender', gender);
    });
    //  拼接请求地址实例
    //  https://api.randomuser.me/?page=5&results=10&sortField=email&sortOrder=ascend&gender=male
    return this.http.get(`${this.randomUserUrl}`, {
      params
    });
  }
}

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public localStorage: any;
  constructor() {
    if (!localStorage) {
      throw new Error('不支持localStorage');
    }
    this.localStorage = localStorage;

  }
  public setData(key: string, value): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
  // public setObject(key: string, value: any): void {
  //   this.localStorage[key] = JSON.stringify(value);
  // }
  //
  // public getObject(key: string): any {
  //   return JSON.parse(this.localStorage[key] || '{}');
  // }
  // 删除数据
  public remove(key: string): any {
    localStorage.removeItem(key);
  }

}

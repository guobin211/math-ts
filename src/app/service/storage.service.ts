import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  // 存储
  setItem(key: string, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  // 查询
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  // 删除
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

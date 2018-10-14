import {Injectable} from '@angular/core';
// import * as sha from 'sha.js';
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  userToken: any;
  user;

  constructor () {
    this.userToken = Md5.hashStr('testcode');
    this.user = {
      username: 'zhangsan'
    };
  }

  public getToken () {
    const arr: Array<string> = this.user.username.split('');
    const day = new Date().getDate();
    this.userToken += arr[0];
    this.userToken += Md5.hashStr(day.toString());
    return this.userToken;
  }
}

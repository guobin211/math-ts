import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // 常用请求头
  headers = {
    url: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
    json: new Headers({'Content-Type': 'application/json'}),
    form: new Headers({'Content-Type': 'multipart/form-data'}),
  };
  // api配置
  private config = {
    'api': 'http://localhost:3000/api/', 'token': 'username-admin-token'
  };

  constructor (private http: Http) {
  }

  /**
   * get请求
   * @param url
   */
  getData (url: string): Observable<any> {
    return this.http.get(this.config.api + url, {headers: this.headers.form}).pipe(map(res => res['_body']), catchError(this.handleError()));
  }

  /**
   * post请求
   * @param url
   * @param body
   */
  postData (url: string, body: any): Observable<any> {
    return this.http.post(this.config.api + url, body, {headers: this.headers.form})
      .pipe(map(res => res['_body']), catchError(this.handleError()));
  }

  /**
   * 更新数据
   * @param url
   * @param body
   */
  updateData (url: string, body: any): Observable<any> {
    return this.http.put(this.config.api + url, body, {headers: this.headers.form}).pipe(map(res => res['_body']), catchError(this.handleError()));
  }

  /**
   * 错误处理
   * @param operation
   * @param result
   */
  private handleError<T> (operation = 'http', result?: T) {
    return (error: any): Observable<T> => {
      // better job of transforming error for user consumption
      this.logMessage(`${operation} failed,status: ${error.status}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * log服务函数
   * @param message
   */
  private logMessage (message: string) {
    console.log(message);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Config} from 'protractor';
import {Params} from '@angular/router';
import {OauthService} from './oauth.service';


const option = {
  headers: new HttpHeaders({
    'Authorization': 'my-auth-token'
  }),
};
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  httpOptions: Object;
  token;
  // api配置
  private config = {
    'api': 'http://localhost:3000/api/'
  };

  constructor (private http: HttpClient, private oauth: OauthService) {
    this.token = this.oauth.getToken();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': this.token
      }),
    };
  }

  /**
   * postForm
   * @param url
   * @param body
   */
  postForm (url, body: Object): Observable<any> {
    // 使用浏览器默认分隔符: WebKitFormBoundaryq2imgPJa8fBQhoq6
    const form = new FormData();
    const keys = Object.keys(body);
    keys.forEach(el => {
      form.append(el, body[el]);
    });
    return this.http.post(this.config.api + url, form, option)
      .pipe(// map( res => res['_body']),
        catchError(this.handleError));
  }

  /**
   * postData
   * @param url
   * @param body
   */
  postData (url, body: string): Observable<any> {
    return this.http.post(this.config.api + url, body, this.httpOptions)
      .pipe(// map( res => res['_body']),
        catchError(this.handleError));
  }

  /**
   * get请求
   * @param url
   * @param params
   */
  getData (url: string, params?: Params) {
    if (params) {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': this.token
        }), params: params,
      };
      return this.http.get(this.config.api + url, options);
    } else {
      return this.http.get(this.config.api + url);
    }
  }

  /**
   * 获取完整的http响应信息
   * @param url
   */
  getConfigResponse (url: string): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(url, {observe: 'response'});
  }

  private handleError (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

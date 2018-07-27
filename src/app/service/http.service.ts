import {Injectable} from '@angular/core';
import {Http, Jsonp, Headers, RequestOptionsArgs, RequestOptions, RequestMethod} from "@angular/http";
import {Utils} from "../class/utils";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // 公共header
  headers = new Headers({'Content-Type': 'application/json'});
  // api：config
  config = {
    api: "localhost:8000/api/",
    Md5: "123456789md23scat",
  };
  constructor(private http: Http, private jsonp: Jsonp) {
  }

  /**
   * 将对象转为查询参数
   * @param paramMap
   * @returns {URLSearchParams}
   */
  private static buildURLSearchParams(paramMap): URLSearchParams {
    let params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }

  /**
   * 方法post 测试
   * @param url, formDate,
   * @returns
   */
  post(url: string, formDate: Object) {
    return this.http.post('http://localhost:8008/api/test',
      JSON.stringify(formDate),
      {headers: this.headers}
    )
      .subscribe(function (res) {
        console.log(res.json());
      });
  }

  /**
   * 方法jsonp
   * @param url, paramMap, success, error
   * @returns request() subscribe
   */
  public jsonpGet(url: string): any {
    return this.jsonp.get(`${this.config.api}${url}&callback=JSONP_CALLBACK`)
  }

  public jsonpPost(url: string, body: any, paramMap: any = null,): any {
    return this.jsonp.post(`${this.config.api}${url}&callback=JSONP_CALLBACK`, body, new RequestOptions({
      method: RequestMethod.Get,
      search: HttpService.buildURLSearchParams(paramMap)
    }))
  }

  /**
   * 方法getData
   * @param url, paramMap, success, error
   * @returns request() subscribe
   */
  public getData(
    url: string,
    paramMap: any = null,
    success: Function = function (successful, data, res) {
    },
    error: Function = function (successful, msg, err) {
    }
  ): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Get,
      search: HttpService.buildURLSearchParams(paramMap)
    }), success, error);
  }

  /**
   * 方法post
   * @param url, body, success, error
   * @returns request() subscribe
   */
  public postData(
    url: string,
    body: any = null,
    success: Function = function (successful, data, res) {
    },
    error: Function = function (successful, msg, err) {
    }
  ): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      body: body,
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    }), success, error);
  }

  /**
   * 方法postFormData
   * @param url, body, success, error
   * @returns request() subscribe
   */
  public postFormData(
    url: string,
    paramMap: any = null,
    success: Function = function (successful, data, res) {
    },
    error: Function = function (successful, msg, err) {
    }
  ): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      search: HttpService.buildURLSearchParams(paramMap).toString(),
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      })
    }), success, error);
  }

  /**
   * 方法put
   * @param url, body, success, error
   * @returns request() subscribe
   */
  public put(
    url: string,
    body: any = null,
    success: Function = function (successful, data, res) {
    },
    error: Function = function (successful, msg, err) {
    }
  ): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Put,
      body: body
    }), success, error);
  }

  /**
   * 方法delete
   * @param url, body, success, error
   * @returns request() subscribe
   */
  public delete(
    url: string,
    paramMap: any = null,
    success: Function = function (successful, data, res) {
    },
    error: Function = function (successful, msg, err) {
    }
  ): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Delete,
      search: HttpService.buildURLSearchParams(paramMap).toString()
    }), success, error);
  }

  /**
   * 方法patch
   * @param url, body, success, error
   * @returns request() subscribe
   */
  public patch(
    url: string,
    body: any = null,
    success: Function = function (successful, data, res) {
    },
    error: Function = function (successful, msg, err) {
    }
  ): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Patch,
      body: body
    }), success, error);
  }

  /**
   * 方法head
   * @param url, body, success, error
   * @returns request() subscribe
   */
  public head(
    url: string,
    paramMap: any = null,
    success: Function = function (successful, data, res) {
    },
    error: Function = function (successful, msg, err) {
    }
  ): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Head,
      search: HttpService.buildURLSearchParams(paramMap).toString()
    }), success, error);
  }

  /**
   * 方法options
   * @param url, body, success, error
   * @returns request() subscribe
   */
  public options(
    url: string,
    paramMap: any = null,
    success: Function = function (successful, data, res) {
    },
    error: Function = function (successful, msg, err) {
    }
  ): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Options,
      search: HttpService.buildURLSearchParams(paramMap).toString()
    }), success, error);
  }

  /**
   * 方法request
   * @param url, options, success, error
   * @returns subscribe
   */
  public request(url: string, options: RequestOptionsArgs, success: Function, error: Function): any {
    this.http.request(url, options).subscribe(res => {
      success(res.ok, res.json(), res);
    }, err => {
      let msg = this.requestFailed(url, options, err);
      error(err.ok, msg, err);
    });
  }

  /**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */
  private requestFailed(url: string, options: RequestOptionsArgs, err) {
    let msg = '请求发生异常', status = err.status;
    if (status === 0) {
      msg = '请求失败，请求响应出错';
    } else if (status === 404) {
      msg = '请求失败，未找到请求地址';
    } else if (status === 500) {
      msg = '请求失败，服务器出错，请稍后再试';
    } else {
      msg = "未知错误，请检查网络";
    }
    return msg;
  }
}

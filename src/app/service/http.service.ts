import {Injectable} from '@angular/core';
import {Http, Jsonp, Headers} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private jsonp: Jsonp) {
  }

  /* 普通请求数据

  getNewsList(url: string) {
    return this.http.get(url);
  }

  getNews(url: string) {
    const api = url + '&callback=JSONP_CALLBACK';
    return this.jsonp.get(api);
  }

  //  jsonp请求需要 &callback=JSONP_CALLBACK
  this.jsonp.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page
    =1&callback=JSONP_CALLBACK")
    .map(res => res.json())
    .subscribe(function(data) {
        console.log(data);
    });

  */
  postData(url: string, formDate: Object) {
    return this.http.post('http://localhost:8008/api/test',
      // JSON.stringify({username: 'admin'}),
      JSON.stringify(formDate),
      {headers: this.headers}
    )
      .subscribe(function (res) {
        console.log(res.json());
      });
  }
}

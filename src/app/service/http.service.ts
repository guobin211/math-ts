import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private config = {
    'dev': 'http://127.0.0.1:8000/',
    'prod': 'http://www.yeo.com/api/'
  };
  private header = new Headers();
  constructor(private http: Http) { }
  getData(url: string) {
    return this.http.get(this.config.dev+url).pipe();
  }
}

import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public client = {
    "ip": "127.0.0.1",
    "uuid": "20180806",
    "count": "123456",
  };
  private ws: WebSocket;

  constructor() {
  }

  /** 创建ws服务 **/
  createSocket(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable<any>(
      observer => {
        this.ws.onopen = (ev) => {
          /** ws连接的时候需要验证客户端 ip地址+uuid+账户信息 **/
          this.sendMessage(this.client);
        };
        this.ws.onmessage = (ev) => {
          observer.next(ev.data);
        };
        this.ws.onerror = (ev) => {
          observer.error(ev);
        };
        this.ws.onclose = (ev) => {
          observer.complete();
        };
      }
    );
  }

  /** send消息 **/
  sendMessage(message: any) {
    this.ws.send(message);
  }
}

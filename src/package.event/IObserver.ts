/**
 * Observer 订阅者 接受信息
 * @author guobin201314@gmail.com on 2019-05-31
 */

export interface IObserver {
  notify(data: any): void;
}

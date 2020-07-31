import { BaseObserver } from "./BaseObserver"

export interface BaseSubject<T> {
  // 注册订阅
  registerObserver(eventType: string, observer: BaseObserver<T>): void
  // 取消订阅
  unSubscribe(eventType: string, observer: BaseObserver<T>): void
  // 推送消息
  publish(eventType: string, data: any): void
}

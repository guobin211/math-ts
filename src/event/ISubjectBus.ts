/**
 * IPublisher
 * @author guobin201314@gmail.com on 2019-05-31
 */
import { IObserver } from "./IObserver";

export interface ISubjectBus {
    // 注册订阅
    registerObserver(eventType: string, observer: IObserver): void;
    // 取消订阅
    unSubscribe(eventType: string, observer: IObserver): void;
    // 推送消息
    publish(eventType: string, data: any): void;
}

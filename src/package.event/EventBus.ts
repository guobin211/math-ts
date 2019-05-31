/**
 * EventBus
 * @author guobin201314@gmail.com on 2019-05-31
 */
import { IObserver } from './IObserver';
import { ISubjectBus } from './ISubjectBus';

class EventBus implements ISubjectBus {

  private observersMap: Map<string, IObserver[]>;

  constructor() {
    this.observersMap = new Map<string, IObserver[]>();
  }

  publish(eventType: string, data: any): void {
    try {
      (this.observersMap.get(eventType) as IObserver[]).forEach((el: IObserver) => el.notify(data));
    } catch (e) {
      console.error('@Param<eventType>错误,未注册的事件: ' + eventType);
    }
  }

  registerObserver(eventType: string, observer: IObserver): void {
    if (this.observersMap.get(eventType)) {
      (this.observersMap.get(eventType) as IObserver[]).push(observer);
    } else {
      this.observersMap.set(eventType, []);
      (this.observersMap.get(eventType) as IObserver[]).push(observer);
    }
  }

  unSubscribe(eventType: string, observer: IObserver): void {
    try {
      this.remove((this.observersMap.get(eventType) as IObserver[]), (el: IObserver) => el === observer);
    } catch (e) {
      console.error('@Param<eventType>错误,未注册的事件:' + eventType);
    }
  }

  private remove(observers: IObserver[], fn: (el: IObserver) => boolean): void {
    for (let i = 0; i < observers.length; i++) {
      if (fn(observers[i])) {
        observers.splice(i, 1);
      }
    }
  }
}

export const eventBus = new EventBus();

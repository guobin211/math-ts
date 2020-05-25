/**
 * EventBus
 * @author guobin201314@gmail.com on 2019-05-31
 */
import { IObserver } from "./IObserver";
import { ISubjectBus } from "./ISubjectBus";

class EventBus implements ISubjectBus {
    constructor() {
        this.observersMap = new Map<string, IObserver[]>();
    }

    private observersMap: Map<string, IObserver[]>;

    private static remove(
        observers: IObserver[],
        fn: (el: IObserver) => boolean
    ): void {
        for (let i = 0; i < observers.length; i++) {
            if (fn(observers[i])) {
                observers.splice(i, 1);
            }
        }
    }

    publish(eventType: string, data: any): void {
        try {
            (this.observersMap.get(eventType) as IObserver[]).forEach(
                (el: IObserver) => el.notify(data)
            );
        } catch (e) {
            console.error("@Param<eventType>错误,未注册的事件: " + eventType);
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
            EventBus.remove(
                this.observersMap.get(eventType) as IObserver[],
                (el: IObserver) => el === observer
            );
        } catch (e) {
            console.error("@Param<eventType>错误,未注册的事件:" + eventType);
        }
    }
}

export const eventBus = new EventBus();

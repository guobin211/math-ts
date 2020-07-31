import { BaseSubject } from "./BaseSubject"
import { BaseObserver } from "./BaseObserver"

export abstract class BaseEventBus<T> implements BaseSubject<T> {
  abstract publish(eventType: string, data: any): void

  abstract registerObserver(eventType: string, observer: BaseObserver<T>): void

  abstract unSubscribe(eventType: string, observer: BaseObserver<T>): void
}

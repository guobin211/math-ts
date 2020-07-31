import { BaseObserver } from "./BaseObserver"
import { BaseEventBus } from "./BaseEventBus"

const GlobalEventBusKey = Symbol("GlobalEventBus")

export class EventBus<T> extends BaseEventBus<T> {
  private _eventMap: Map<string, BaseObserver<T>[]>

  constructor() {
    super()
    this._eventMap = new Map()
  }

  public publish(eventType: string, data: T): void {
    const res = this._eventMap.get(eventType)
    if (res) {
      res.flatMap(o => o.onNotify(data))
    }
  }

  public registerObserver(eventType: string, observer: BaseObserver<T>): void {
    const obs = this._eventMap.get(eventType)
    if (obs) {
      obs.push(observer)
      this._eventMap.set(eventType, obs)
    } else {
      this._eventMap.set(eventType, [observer])
    }
  }

  public unSubscribe(eventType: string, observer: BaseObserver<T>): void {
    const obs = this._eventMap.get(eventType)
    if (obs) {
      const val = obs.filter(o => o !== observer)
      this._eventMap.set(eventType, val)
    }
  }
}

export function createSingleEventBus<T>(): EventBus<T> {
  let bus = (globalThis as any)[GlobalEventBusKey]
  if (!bus) {
    bus = new EventBus()
    ;(globalThis as any)[GlobalEventBusKey] = bus
  }
  return bus
}

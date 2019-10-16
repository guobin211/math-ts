# 事件

### eventbus

```js
const obs = {
  notify(data) {
    console.log(data);
  }
};

eventBus.registerObserver("text", obs);

eventBus.publish("text", "hello text event");

eventBus.unSubscribe("text", obs);
```

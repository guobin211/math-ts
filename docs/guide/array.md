# 数组

### array

```js
all([1, 2, 3], function(el) {
  return el > 2;
});

allEqual([1, 1, "1"]);

any([1, 2, 3], function(el) {
  return el > 1;
});

arrayDifference([1, 2, 3], [1, "2", () => {}]);

chunk([1, 2, 3, 4, 5], 2);

compact([1, 0, null, false, "", ""]);

countOccurrences([1, 1, 1, 2, 2, 3]);

deepFlatten([[[1,2],3,4],5,6])

```

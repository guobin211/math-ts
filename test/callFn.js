'use strict';
// 必须启用严格模式
var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', sData);
}

display.call();  // sData value is Wisen

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
// 使用call继承
console.log(new Food('cheese', 5).category);

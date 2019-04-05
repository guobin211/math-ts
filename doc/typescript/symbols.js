// @ts-ignore
var symA = Symbol("key");
console.log(symA);
var arrayList = [1, "jack", 22, 2, "tom", 18];
for (var _i = 0, arrayList_1 = arrayList; _i < arrayList_1.length; _i++) {
    var el = arrayList_1[_i];
    console.log(el);
}
for (var index in arrayList) {
    console.log(index);
}
// @ts-ignore
var pets = new Set(["Cat", "Dog", "Hamster"]);
for (var _a = 0, pets_1 = pets; _a < pets_1.length; _a++) {
    var pet = pets_1[_a];
    console.log(pet);
}
// @ts-ignore   添加属性
pets["species"] = "species";
for (var pet in pets) {
    console.log(pet);
}

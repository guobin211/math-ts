// @ts-ignore
let symA = Symbol("key");

console.log(symA);


let arrayList = [1, "jack", 22, 2, "tom", 18];

for (let el of arrayList) {
    console.log(el);
}

for (let index in arrayList) {
    console.log(index);
}

// @ts-ignore
let pets = new Set(["Cat", "Dog", "Hamster"]);

// @ts-ignore
for (let pet of pets) {
    console.log(pet);
}

// @ts-ignore   添加属性
pets["species"] = "species";

for (let pet in pets) {
    console.log(pet);
}

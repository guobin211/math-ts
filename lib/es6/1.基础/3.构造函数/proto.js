var arr=[1,2,3,4,4,5,6,7,8,5,6,7,2];
console.log(arr);
function sum() {
    // arguments.__proto__==Array.prototype;
    // arguments.push(10);
    console.log(arguments);
}
sum(1,2,3);

// 原型增加去重方法
Array.prototype.remove=function () {
    var ary = this.filter((item, index)=>{
        return !this.slice(0,index).includes(item);
    });
    this.length=ary.length;
    for (let i=0;i<ary.length;i++) {
        this[i]=ary[i];
    }
    return ary.length;
};
arr.remove();
console.log(arr);
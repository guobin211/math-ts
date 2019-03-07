// this作用域问题
function fn2(){
    // undefined
    console.log(this.n);
    var n="n";
    this.n=10;
    console.log(n);
}
var obj={
    fn2:fn2,
    n:1
};
// this==window
fn2();
// this==obj
obj.fn2();
console.log(obj.n);
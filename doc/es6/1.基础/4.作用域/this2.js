function f() {
    // window
    console.log(this);
}
var obj={
    fn:(function () {
        // window.f
        return this.f
    })(),
    f:function () {
        console.log(this);
    }
};
// this==window
f();
//  this==obj
obj.f();

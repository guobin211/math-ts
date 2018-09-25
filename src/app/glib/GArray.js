"use strict";
exports.__esModule = true;
var GArray = (function () {
    function GArray() {
    }
    GArray.chunk = function (arr, size) {
        var reArr = Array.from({ length: Math.ceil(arr.length / size) }, function (v, i) { return arr.slice(i * size, i * size + size); });
        return reArr;
    };
    GArray.pull = function (arr) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var argState = Array.isArray(args[0]) ? args[0] : args;
        var pulled = arr.filter(function (v, i) { return !argState.includes(v); });
        arr.length = 0;
        pulled.forEach(function (v) { return arr.push(v); });
    };
    GArray.groupBy = function (arr, fn) {
        arr.map(typeof fn === 'function' ? fn : function (val) { return val[fn]; }).reduce(function (acc, val, i) {
            acc[val] = (acc[val] || []).concat(arr[i]);
            return acc;
        }, {});
    };
    GArray.compact = function (arr) { return arr.filter(Boolean); };
    GArray.countBy = function (arr, fn) {
        return arr.map(typeof fn === 'function' ? fn : function (val) { return val[fn]; }).reduce(function (acc, val, i) {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});
    };
    GArray.getNumInArr = function (arr, val) { return arr.reduce(function (a, v) { return (v === val ? a + 1 : a + 0); }, 0); };
    GArray.deepFlatten = function (arr) { return [].concat.apply([], arr.map(function (v) { return (Array.isArray(v) ? GArray.deepFlatten(v) : v); })); };
    GArray.flatten = function (arr, depth) {
        if (depth === void 0) { depth = 1; }
        depth != 1
            ? arr.reduce(function (a, v) { return a.concat(Array.isArray(v) ? GArray.flatten(v, depth - 1) : v); }, [])
            : arr.reduce(function (a, v) { return a.concat(v); }, []);
    };
    GArray.filterNonUnique = function (arr) { return arr.filter(function (i) { return arr.indexOf(i) === arr.lastIndexOf(i); }); };
    GArray.difference = function (a, b) {
        var s = new Set(b);
        return a.filter(function (x) { return !s.has(x); });
    };
    GArray.differenceWith = function (arr, val, comp) {
        arr.filter(function (a) { return val.findIndex(function (b) { return comp(a, b); }) === -1; });
    };
    GArray.oneValuesOfArray = function (arr) { return new Set(arr).slice(); };
    GArray.dropElements = function (arr, func) {
        while (arr.length > 0 && !func(arr[0]))
            arr = arr.slice(1);
        return arr;
    };
    GArray.remove = function (arr, func) {
        Array.isArray(arr)
            ? arr.filter(func).reduce(function (acc, val) {
                arr.splice(arr.indexOf(val), 1);
                return acc.concat(val);
            }, [])
            : [];
    };
    GArray.everyNth = function (arr, nth) { return arr.filter(function (e, i) { return i % nth === nth - 1; }); };
    GArray.indexOfAll = function (arr, val) {
        var indices = [];
        arr.forEach(function (el, i) { return el === val && indices.push(i); });
        return indices;
    };
    GArray.initialize2DArray = function (w, h, val) {
        Array.from({ length: h }).map(function () { return Array.from({ length: w }).fill(val); });
    };
    return GArray;
}());
exports.GArray = GArray;
//# sourceMappingURL=GArray.js.map
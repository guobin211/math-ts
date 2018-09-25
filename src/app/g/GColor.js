"use strict";
exports.__esModule = true;
var GColor = (function () {
    function GColor() {
    }
    GColor.getColor = function (num, col) {
        var colors = [
            '#F8D800', '#0396FF', '#EA5455', '#7367F0', '#32CCBC', '#F6416C', '#28C76F', '#9F44D3', '#623AA2', '#F55555',
            '#8C1BAB', '#9708CC', '#736EFE', '#E96D71', '#FA016D', '#DE4313', '#002661', '#6018DC', '#D939CD', '#130CB7',
            '#A64DB6', '#5312D6', '#0E5CAD', '#E80505', '#CA26FF', '#360940', '#4C83FF', '#F072B6', '#123597', '#C346C2',
            '#5961F9', '#FD6585', '#465EFB', '#FFC600', '#FD6E6A', '#65FDF0', '#1D6FA3', '#58CFFB', '#5151E5', '#FF52E5',
            '#3C8CE7', '#1904E5', '#FFA8A8', '#FF96F9', '#3B2667', '#72EDF2', '#FFA6B7', '#87CEFA', '#4169E1', '#1E90FF'
        ].concat(col);
        var reArr = [];
        var l = colors.length;
        for (var i = 0; i < num; i++) {
            var n = Math.floor(Math.random() * (l - 1)) + 0;
            if (colors[n]) {
                reArr.push(colors[n]);
            }
        }
        return reArr;
    };
    GColor.randomColor = function () {
        return '#' + (function (color) {
            return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                && (color.length == 6) ? color : arguments.callee(color);
        })('');
    };
    GColor.random = function (lower, upper) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    };
    GColor.rgbColor = function () {
        var r = GColor.random(0, 256), g = GColor.random(0, 256), b = GColor.random(0, 256);
        var result = "rgb(" + r + "," + g + "," + b + ")";
        return result;
    };
    return GColor;
}());
exports.GColor = GColor;
//# sourceMappingURL=GColor.js.map
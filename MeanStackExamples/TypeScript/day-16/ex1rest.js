// here x & y are would be anytype
function sum1(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    var result = x;
    for (var _a = 0, y_1 = y; _a < y_1.length; _a++) {
        var i = y_1[_a];
        result = result + i;
    }
    return result;
}
// here x & y must have numbers
function sum2(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    var result = x;
    for (var _a = 0, y_2 = y; _a < y_2.length; _a++) {
        var i = y_2[_a];
        result = result + i;
    }
    return result;
}
var r = sum1(10, "20", "30", 40);
document.write("<p>result : ".concat(r, "</p>"));
r = sum2(10, 40, 30, 20);
document.write("<p>result : ".concat(r, "</p>"));

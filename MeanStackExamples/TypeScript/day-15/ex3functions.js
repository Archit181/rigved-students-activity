function test1(a, b) {
    document.write("<p> test1() a = ".concat(a, ", b = ").concat(b, "</p>"));
}
function test2(a, b) {
    document.write("<p> test2() a = ".concat(a, ", b = ").concat(b, "</p>"));
    return (a + b);
}
function test3(a, b) {
    if ((a + b) < 0) {
        return "result id negetive" + (a + b);
    }
    else {
        return (a + b);
    }
}
test1(30, 40);
var r = test2(20, 30);
document.write("<p>result from test2() ".concat(r, "</p>"));
var r1 = test3(r, -500);
document.write("<p>result form test3() ".concat(r1, "</p>"));

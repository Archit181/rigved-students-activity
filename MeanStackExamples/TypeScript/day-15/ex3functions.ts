function test1(a: number, b: number) : void {
    document.write(`<p> test1() a = ${a}, b = ${b}</p>`);
}
function test2(a: number, b: number) : number{
    document.write(`<p> test2() a = ${a}, b = ${b}</p>`);
    return (a + b);
}
function test3(a: number, b: number) : string | number {
    if((a +b ) < 0) {
        return "result id negetive"+(a + b);
    }else {
        return (a + b);
    }
}
test1(30, 40);
let r = test2(20, 30);
document.write(`<p>result from test2() ${r}</p>`);
let r1 = test3(r, -500);
document.write(`<p>result form test3() ${r1}</p>`);
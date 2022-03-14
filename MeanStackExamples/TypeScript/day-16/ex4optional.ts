function test1(a: number, b?: number, c?: number) {
    document.write(`<p> a = ${a}, b = ${b}, c = ${c}</p>`);
}
test1(20);
test1(20, 30);
test1(20, 30, 40);
// here user has lastname as optional property
let user :{firstname: string, lastname?: string, phone: number}

user = {firstname: "Alex", phone: 8987888894}
document.write(`<p> name : ${user.firstname}, phone : ${user.phone}</p>`);
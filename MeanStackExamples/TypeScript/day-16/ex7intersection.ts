interface A {
    name : string;
}
interface B {
    phone : number
}

//obj1 is of both A & B
let obj1 : A & B;
obj1 = {name : "Alex", phone : 9988811658}
document.write(`<p>Name : ${obj1.name}, Phone : ${obj1.phone} </p>`);
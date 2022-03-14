class Person {
    public name : string;
    protected age : number;
    constructor(name: string , age : number) {
        this.name = name;
        this.age =  age;
    }
}
class Employee extends Person {
    constructor(name, age){
        super(name, age);
    }
    printData() : void {
        // we can access age as it is inherited from class Person
        document.write(`<p>name: ${this.name}, Age: ${this.age}</p>`);
    }
}
let e = new Employee("Alex", 35);
e.printData();
e.name = "Alexander"; // name will be print because it is public
// e.age = 30; // gives an error because it is protected
e.printData();
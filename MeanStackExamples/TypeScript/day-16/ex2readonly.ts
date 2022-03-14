class Emp{
    private readonly id : number; //it can be access only within class
    private name : string;
    constructor(id : number, name: string) {
        this.id = id;
        this.name = name;
    }
    // Accessible outside the class
public display() : void {
    document.write(`<p> id : ${this.id}, name : ${this.name}</p>`);
}
public getId() : number {
    return this.id;
}
public setName(name : string) : void {
    this.name = name;
}

}
let e = new Emp(100, "Rajesh");
let e1 = new Emp(200, "Vijay");
e.display();
e1.display();
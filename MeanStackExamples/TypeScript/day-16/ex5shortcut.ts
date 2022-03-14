class student {
    constructor(public name : string, public age : number) {}
    display () : void {
        document.write(`<p>Name: ${this.name}, Age: ${this.age}</p>`)
    }
}
let s1 = new student("Bruce Wayne", 28);
s1.display();
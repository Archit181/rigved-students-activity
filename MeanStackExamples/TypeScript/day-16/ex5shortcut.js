var student = /** @class */ (function () {
    function student(name, age) {
        this.name = name;
        this.age = age;
    }
    student.prototype.display = function () {
        document.write("<p>Name: ".concat(this.name, ", Age: ").concat(this.age, "</p>"));
    };
    return student;
}());
var s1 = new student("Bruce Wayne", 28);
s1.display();

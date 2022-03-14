var Emp = /** @class */ (function () {
    function Emp(id, name) {
        this.id = id;
        this.name = name;
    }
    // Accessible outside the class
    Emp.prototype.display = function () {
        document.write("<p> id : ".concat(this.id, ", name : ").concat(this.name, "</p>"));
    };
    Emp.prototype.getId = function () {
        return this.id;
    };
    Emp.prototype.setName = function (name) {
        this.name = name;
    };
    return Emp;
}());
var e = new Emp(100, "Rajesh");
var e1 = new Emp(200, "Vijay");
e.display();
e1.display();

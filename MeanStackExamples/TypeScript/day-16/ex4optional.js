function test1(a, b, c) {
    document.write("<p> a = ".concat(a, ", b = ").concat(b, ", c = ").concat(c, "</p>"));
}
test1(20);
test1(20, 30);
test1(20, 30, 40);
// here user has lastname as optional property
var user;
user = { firstname: "Alex", phone: 8987888894 };
document.write("<p> name : ".concat(user.firstname, ", phone : ").concat(user.phone, "</p>"));

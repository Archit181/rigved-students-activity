// now one type is created called alphanumeric
type alphanumeric =  string | number;

let strNum : alphanumeric;
strNum = "hello world";
document.write(`<p> strnum : ${strNum}</p>`);
strNum = 300;
document.write(`<p> strnum : $(strNum)</p>`);
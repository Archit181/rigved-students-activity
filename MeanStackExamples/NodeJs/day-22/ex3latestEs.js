class calc{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    addition() {
        return (this.x + this.y);
    }
    findMin(...i) {
        let temp = i[0]; // temp = -4
        i.forEach((item) => {
            if(item < temp) {//item = 70 < 20
                temp = item;
            } 
        });
        return temp;
    }
}
let c1 = new calc(20, 30);
let r = c1.addition();
console.log(`result :${r}`);
let min = c1.findMin(20, -1, -4,70);
console.log(`minimum : ${min}`);

let x = 20;
let y = 30;
let z = 50;
console.log(`z = ${z}`);
setTimeout(() => {
    console.log(`inside callback`);
}, 0); // Timeout is zero.
console.log(`end of program`);
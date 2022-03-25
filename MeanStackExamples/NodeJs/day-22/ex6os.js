let os = require("os");
console.log('Arch : ${os.arch()}');
console.log(`plateform : ${os.platform()}`);
console.log(`release : ${os.release()}`);
console.log(`hostname : ${os.hostname()}`);
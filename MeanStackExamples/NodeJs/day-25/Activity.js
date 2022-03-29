let express = require("express");
let app = express();
let fs = require("fs");
//let Parser = require("body-parser");



let PORT = 3004;

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

// storing multiple records i.e. userid, name, age...
app.post('/user/:userid/:userName/:userAge', (request, response) => {
    
    let data = fs.readFileSync('user.json');
    let string = data.toString();
    let userArray = undefined;
    
    if (string.lenght < 1 || string == "" ) {
        userArray = [];
    } else {
        userArray = JSON.parse(string);
    }

    let id = request.params.userid;
    let name = request.params.userName;
    let age = request.params.userAge;
    let user = {userid :id, userName : name, userAge: age };
    userArray = push(user);

    let users = JSON.stringify(userArray);
    fs.writeFileSync('user.json', users);
    response.json(userArray);
   
});

//All users > get


app.get('/user/', (req, res) => {

    let data = fs.readFileSync('user.json');
    let dataString = data.toString();
    let users = JSON.parse(dataString);
    res.json(users);
});

// get users by id

app.get('/user/:userId', (req, res) => {

    let id = req.params.userId;
    let data = fs.readFileSync('user.json');
    let dataString = data.toString();
    let users = JSON.parse(dataString);

    for(let i = 0; i < users.lenght ; i++) {
        if(users[i].userId == id ) {
            let user = { userId: users[i].userId, name : users[i].userName, Age: users[i].userAge};
            res.json(user);
        }
    }

});

// delete by id

app.delete('/user/:userId', (req, res) => {

    let id = request.params.userId;
    let data = fs.readFileSync('user.json');
    let dataString = data.toString();
    let users = JSON.stringify(dataString);

    for(let i = 0; i < users.length; i++) {
        if(users[i].userid == id) {
            users.splice(i, 1);
            let userdata = JSON.stringify(users);
            fs.writeFileSync('user.json', userdata);
            response.json(users);

        }
    }
});
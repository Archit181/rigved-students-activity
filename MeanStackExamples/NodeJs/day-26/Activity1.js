//importing liabraries
let express = require("express");
let parser = require("body-parser");
let cors = require("cors");

let mongoClient = require("mongodb").MongoClient;
let app = express(); //top function
let PORT = 3004;
let dbURL = "mongodb://localhost:27017"; //mongodb URL


app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

app.use(parser.json());
app.use(cors());


app.get("/employee", (req, res)=> {

    mongoClient.connect(dbURL, {useNewUrlparser: true}, (error, client)=> {

        if(error)
        throw error;
        let db = client.db("mydb");
        let employee = [];

        cursor.forEach((doc, err)=> {
            if(err)
                throw err;
                employee.push(doc);
        }, () => {
            req.json(employee);
            client.close();
        }
        );
    });
});


app.post("/employee/:id", (request, response)=> {
    
    let empDoc = req.body;

    mongoClient.connect(dbURL, {useNewUrlparser: true}, (error, client) => {

        if(error)
         throw error;

        let db = client.db("mydb");
        db.collections("crud").insertOne(empDoc,(err, res)=> {
        if(err){
            res.status(409).json(`employee doesnt exist`);
        }
        response.status(201).json(res);
        client.close();
        }) 
    });
} );


app.delete("/employee/:id", (req, response)=> {

    let id = parseInt(req.params.id);
     
    mongoClient.connect(dbURL, {useNewUrlparser: true}, (err, client) => {
        if(err)
        throw err;
        let db = client.db("mydb");

        db.collections("crud").deleteOne({_id: id})
        .then((doc) => {
            response.json(doc);
            client.close();
        })
    });
});

app.get("/employee/:id",(req,response) =>{
    let id = parseInt(req.params.id);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error, client)=>{
        if(error)
        throw error;
        //use mydb instance
        let db = client.db("mydb");
        //use the collection "crud"
        db.collection("crud").findOne({_id:id})
        .then((doc) => {
            if(doc != null){
                response.json(doc);
            }else{
                response.status(404).json({"message":`Sorry ${id} doenst exist !`});
            }
            client.close();
        })
    })
})
app.post("/employee",(req,response) =>{
    let empDoc = req.body
    //connect url, parser, callbacks 
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client) =>{
        if(error)
            throw error;
            
            let db = client.db("mydb");
            //user the collection "crud" to insert the document 
            db.collection("crud").insertOne(empDoc,(err,res) =>{
                if(err){
                res.status(409).json(`employee with an id ${empDoc._id} doenst exist !`)
                }
                response.status(201).json(res);
                client.close();
            })
    })
})
//  updating the data using PUT request
app.put("/employee/:id/:salary",(req,res)=>{
    let id = parseInt(req.params.id);
    let salary = parseInt(req.params.salary);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error)
            throw error;
        let db = client.db("mydb");
        
        db.collection("crud").updateOne({_id:id},{$set:{salary:salary}})
        .then((doc)=>{
            res.json(doc);
            client.close();
        })
    })
})
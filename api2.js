const express = require ('express');
const database = require ('./data');
const {MongoClient, Db} = require ('mongodb');
const connection = require ('mongodb').MongoClient



const app = express();
app.listen(8005,()=>{
    console.log('Now Listening To http://localhost:8005')
})
app.post('/products',(req,res)=>{
res.send(database)
    
})

 
connection.connect("mongodb://localhost/27107/DukaDb",(err,db)=>{
    if (err) throw err;
    console.log("succes in connecting db")
    var dbo = db.db("DukaDB")
    dbo.createCollection('shopproducts',(err)=>{
        console.log("collection created")
    })

})











const express = require ('express');
const {connectToDb,getDb} = require ('./DB')

// INITIALIZING OUR APP & MIDDLEWARE
 let db
// Database Connection
connectToDb ((err)=>{
    if (!err) {
        app.listen(4005,()=>{
            console.log("App Listenung to port http://localhost:4005")
        })
     db = getDb;
    }

})
const app = express ()

// Routes
app.get('/books',(req,res)=>{
    let books = []  
         db.Collection('bookstore')
    .find()
    .sort({author:1})
    .forEach(book => books.push(book))
    .then(()=>{
        res.status(200).json(books)
    })
    .catch(()=>{
        res.status(500).json({error:'Could Not Fetch Documents'})
    })

})

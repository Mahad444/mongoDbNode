const { ObjectId } = require('mongodb');
const express = require ('express');
const {connectToDb,getDb} = require ('./DB')

// INITIALIZING OUR APP & MIDDLEWARE
const app = express ()

 let db
// Database Connection
connectToDb ((err)=>{
    if (!err) {
        app.listen(4005,()=>{
            console.log("App Listenung to port http://localhost:4005")
        })
     db=getDb(); 
    }

})

// Routes
app.get('/bookstore',(req,res)=>{
    let books = []  
         db.collection('details')
    .find()
    .sort({author:1})
    .forEach(book => books.push(book))
    .then(()=>{
        res.status(200).json(books)
    })
    .catch(()=>{
        res.status(500).json({error:'Could Not Fetch Documents'})
    })
    app.get('/bookstore/:id',(req,res)=>{
if (ObjectId.isValid(req.params.id)){

        db.collection('details') 
           .findOne({_id: ObjectId(req.params.id)})
           .then(doc =>{
               res.status(200).json(doc);
           }).catch(err =>{
               res.status(500).json({error:"Could not fetch documents"})
           })
}else{
    res.send ({error:"Invalid Id"})
}
}) 
     
    
})

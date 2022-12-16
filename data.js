// const express = require ('express')
// const routes = express.Router()
// const app = express();
const {MongoClient} = require('mongodb')
const productSchema = ({

productName :{
    type:String,
    required:[true,"This field Is Required"]
},
price:{
    type : parseFloat,
    required:[true,"Price Is Required"]
}
})

module.exports = productSchema;







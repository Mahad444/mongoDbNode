const {db} = require('./data');
const Schema = db.Schema;

const productSchema =  new Schema ({
    productName :{
        type:String,
        required:[true,"This field Is Required"]
    },
    price:{
        type : parseFloat,
        required:[true,"Price Is Required"]
    }
})

const Products = ('/product',productSchema)

module.exports = Products
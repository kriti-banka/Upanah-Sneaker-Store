const { default: mongoose } = require("mongoose");

let productschema = new mongoose.Schema
(
    {
        pid :{type:Number,required:true,unique:true},
        pname:{type:String,required:true},
        brand:{type:String,required:true},
        price:{type:Number,required:true},
        desc:{type:String,required:true},
        gender:{type:String,required:true},
        pi1:{type:String,required:true},
        pi2:{type:String,required:true},
        pi3:{type:String,required:true},
        pi4:{type:String,required:true},
        pi5:{type:String,required:true},
    }
)

const Product = new mongoose.model("Product",productschema)

module.exports = Product

// savedoc=()=>
// {
//     let p1=new Product
//     (
//         {
//             pid:"114",
//             pname:"New Balance WMNS 327",
//             brand:"New Balance",
//             price:"14999",
//             desc:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
//             gender:"F",
//             pi1:"/images/product1/New Balance WMNS 327/1.webp",
//             pi2:"/images/product1/New Balance WMNS 327/2.webp",
//             pi3:"/images/product1/New Balance WMNS 327/3.webp",
//             pi4:"/images/product1/New Balance WMNS 327/4.webp",
//             pi5:"/images/product1/New Balance WMNS 327/5.webp",
         
//         }
//     )
//     p1.save()
// }

// module.exports = savedoc

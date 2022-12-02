let mongoose = require ('mongoose')

let URL = "mongodb+srv://admin:password1234%40@upanah1.qeprold.mongodb.net/?retryWrites=true&w=majority"

let connectdb = async()=>
{
    try 
    {
        let con = await mongoose.connect
        (URL,
            {useUnifiedTopology:true,
            useNewUrlParser:true
            }
        )
        console.log("Database Connected Successfully")
    } 
    catch (err) 
    {
        console.log(err)
    }
}

module.exports= connectdb
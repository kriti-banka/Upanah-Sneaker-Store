let express=require("express")
let path=require("path")
let hbs = require("hbs")
let alert = require("alert")
// let Product = require("../model/model")
let Product = require("../model/model")
let connectdb = require("../connection/connectdb")
connectdb()

let cartlist =
[]
let pricelist =
[
    
]

hbs.registerHelper('from', function (arr, start,limit) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(start, limit);
  });
hbs.registerHelper('limit', function (arr,limit) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(0, limit);
  });


// let savedoc = require("../model/model")
// savedoc()


let app=express()
app.set("view engine","hbs")



app.use(express.static(path.join(__dirname,"../public")))
let regex=/\w/

app.get("/",(req,res)=>
{
    Product.find({},function(err,products)
    {
        if(err)
        {
            console.log("ERRORRRRRRRRRR")
            return
        }
        res.render("index",{products})
    })
})


app.get("/men",(req,res)=>
{
    Product.find({gender:"M"},function(err,products)
    {
        if(err)
        {
            console.log("ERRORRRRRRRRRR")
            return
        }
        res.render("men",{products})
    })
})


app.get("/women",(req,res)=>
{
    Product.find({gender:"F"},function(err,products)
    {
        if(err)
        {
            console.log("ERRORRRRRRRRRR")
            return
        }
        res.render("women",{products})
    })
})


app.get("/about",(req,res)=>
{
    res.render("about")
})

app.get("/cart",(req,res)=>
{
    Product.find({pid:{$in:cartlist}},function(err,products)
    {
        if(err)
        {
            console.log("ERRORRRRRRRRRR")
            return
        }
        res.render("cart",{products})
    })
})

app.get("/login",(req,res)=>
{
    res.render("login")
})

app.get("/contact",(req,res)=>
{
    res.render("contact")
})

app.post("/addtocart/:pid&:price",(req,res)=>
{
    let pid_get=req.params.pid
    let price_get=req.params.price
    // console.log(price_get)
    cartlist.push(pid_get)
    pricelist.push(
        {
            pr:price_get
        }
    )
    console.log(pricelist)
    Product.find({pid:pid_get},function(err,products)
    {
        if(err)
        {
            console.log("ERRORRRRRRRRRR")
            return
        }
        console.log(products)
        res.render("product",{pricelist,products})
    })
})
app.post("/deletecart/:pid",(req,res)=>
{
    let pid_get=req.params.pid
    let x
    for (let i = 0; i < cartlist.length; i++)
     {
        if(cartlist[i]==pid_get)
        {   
            x=i
        }
     }
     delete cartlist[x]
     delete pricelist[x]
     Product.find({pid:{$in:cartlist}},function(err,products)
    {
        if(err)
        {
            console.log("ERRORRRRRRRRRR")
            return
        }
        res.render("cart",{products,pricelist})
    })
     

    // console.log(pid_get)
    // console.log(cartlist.find(pid_get))
    // console.log(cartlist)
})

app.get("/product/:ref",(req,res)=>
{
    let ref1 = req.params.ref
    Product.find({pid:ref1},function(err,products)
    {
        if(err)
        {
            console.log("ERRORRRRRRRRRR")
            return
        }
        res.render("product",{products})
    })
})

app.get(regex,(req,res)=>
{
    res.render("error")
})


app.set("views",path.join(__dirname,"../templates/views"))
hbs.registerPartials(path.join(__dirname,"../templates/partials"))



app.listen("3000",()=>
{
    console.log("Server is connected")
    console.log(__dirname)
    
    // let file=path.join(__dirname,"./public")
    // console.log(file)
})
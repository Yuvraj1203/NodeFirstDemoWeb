const express = require ("express");
const app = express();
const path = require('path');
const port = 3333;
const hbs = require("hbs");

//paths
const staticPath = path.join(__dirname,"/public");
const viewsPath = path.join(__dirname,"/template/views")
const partialsPath = path.join(__dirname,"/template/partials")

app.use(express.static(staticPath));

//set views to template
app.set("views",viewsPath)

hbs.registerPartials(partialsPath);

//set engine
app.set("view engine","hbs")

app.get("/",(req,res)=>{
    res.render("index")
})


app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.get("*",(req,res)=>{
    res.render("404");
})

app.listen(port,()=>{
    console.log(`Listening to the port number ${port}`)
})
const express = require('express');
const path=require('path');
const { connectDB } = require('./db');
const prroute= require('./route/prroute');
// new
const methodOverride = require('method-override');
connectDB();
const app =express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// new
app.use(methodOverride("_method"))
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/",prroute);

app.listen(4000,()=>{
    console.log("running......");
    
})


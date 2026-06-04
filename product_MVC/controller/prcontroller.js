const prModel = require("../model/prmodel");

const addform=(req,resp)=>{
resp.render("add")
}

const showPr =async(req,resp)=>{
    try {
        const result = await prModel.find();
        resp.render("show",{result})
    } catch (error) {
        console.log(error);
        
    }
}

const addPr= async(req,resp)=>{
    try {
        const result= new prModel({
            pname:req.body.pname,
            price:req.body.price,
            category:req.body.category
        })
        await result.save();
        resp.redirect("/showPr")
        
    } catch (error) {
        console.log(error);
        
    }
}

const deletePr = async (req,resp)=>{
    try {
        await prModel.findByIdAndDelete(req.params.id)
        resp.redirect("/showPr")
    } catch (error) {
        console.log(error);
    }
}

const editForm = async (req,resp) =>{
    try {
        const PrData = await prModel.findById(req.params.id);
        console.log(PrData)
        resp.render("edit",{PrData})
    } catch (error) {
        console.log(error);
    }
}

const updatePr = async(req,resp)=>{
    try {
        await prModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        resp.redirect("/showPr")
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    showPr,addPr,addform,deletePr,editForm,updatePr
}
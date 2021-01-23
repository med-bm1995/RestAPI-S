const mongoose=require("mongoose")
const schema=mongoose.Schema

const ContactScema=new schema({
    name:{type:String},
    email:{type:String , unique:true},
    phone: {type:Number},
    dateCreation:{type:Date,default:Date.now()}
})


module.exports=Contact=mongoose.model("contats",ContactScema)
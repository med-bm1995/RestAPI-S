const mongoose =require("mongoose")
const config =require("config")
const connectDB =()=>{
    mongoose.connect(config.get("MONGO-URI"),{ useNewUrlParser: true ,useUnifiedTopology: true})
    .then(()=>console.log("mongoose conected"))
    .catch((err)=>console.log(err))
    
}
module.exports=connectDB
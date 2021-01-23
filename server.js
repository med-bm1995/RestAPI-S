const express =require("express")
const connectDB = require("./config/connectDB")
const app=express()
// 4 midllewar
app.use(express.json())
//2 connect to Data Base
connectDB()
// 3 routes
app.use("/api/contacts",require("./routes/contact"))
// 1 creation d'un port 
const port =process.env.PORT||5000
app.listen(port,(err)=>err?console.log("err"):console.log(`server is rarnining en ${port}`) )

const express = require("express")
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const authRouter = require("./routes/auth")
const postRouter = require("./routes/posts")
const commentRouter = require("./routes/comment")
var cors = require('cors')

app.use(cors({origin:'http://localhost:5173'}))


dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)
.then(console.log("database connected"))
.catch((err)=>console.log("Error occured"));

 
// app.use("/",(req,res)=>{
//     console.log("first")
// })

app.use("/api/auth",authRouter)
app.use("/api/post",postRouter)
app.use("/post",commentRouter)

app.listen("5000",()=>{
    console.log("Server is running...");
})
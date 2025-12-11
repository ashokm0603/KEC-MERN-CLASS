const express = require('express');
const env=require("dotenv");
const connection=require("./config/db")
const app = express()




connection()

app.use(express.json())
env.config();
const port=process.env.PORT;



const studentRoutes=require("./routes/StudentRoute")

app.use("/api",studentRoutes)
app.listen(port, () =>{
     console.log(`Server Running On port ${port}!`)
})
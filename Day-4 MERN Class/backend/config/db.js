const mongoose = require("mongoose");

const connection = async() => {
 try{
    await mongoose.connect(process.env.MONGODB_UR);
    console.log("Database Connected Successfully");
    
}catch(err){
     console.log("Error to  Connect DB : ",err);

 }
};
module.exports=connection;

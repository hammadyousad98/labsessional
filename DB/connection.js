const mongoose = require('mongoose');

const URI='mongo "mongodb+srv://cluster0.uwbpy.mongodb.net/<dbname>" --username hammad_yousaf';

const connectDB = async ()=>{
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true  });
    console.log("Connection Established");
}

module.exports=connectDB;
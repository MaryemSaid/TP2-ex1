const mongoose = require('mongoose');
const MONGO_URI="mongodb+srv://admin:admin@cluster0.w11je.mongodb.net/";
const PORT=3000;


const connectDB=async()=>{
    try{
        await mongoose.connect(MONGO_URI)
        .then(()=> console.log("Established connection"));
    }catch(error){
        console.error('Erreur de connexion');
        process.exit(1);
    }
};

module.exports=connectDB
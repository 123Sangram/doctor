const mongoose=require('mongoose') //library

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("database connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
}

module.exports=connectDB;
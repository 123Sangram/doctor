const validator =require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Doctor = require('../models/doctorModel');
const doctorModel=require('../models/doctorModel.js')
 const cloudinary = require('cloudinary').v2;

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, available, fees, address } = req.body;
      const image=req.file

      if(!name , !email , !password , !image , !speciality , !degree , !experience , !about , !fees , !address ){
        return res.json({sucess:false,message:"Missing Details"})
        }
    // validating email format
    if(!validator.isEmail(email)){
        return res.json({sucess:false,message:"Invalid Email"})
    }
    //validating strong password
    if(password.length<8){
        return res.json({sucess:false,message:"Password should be at least 8 characters long"})
    }

    //hasing doctor password
    const salt =await bcrypt.genSalt(10)
    const hashedPassword =await bcrypt.hash(password, salt)

    //upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
   const imageUrl = imageUpload.secure_url

//    doctorData
const doctorData = {
    name,
    email,
    password:hashedPassword,
    image:imageUrl,
    speciality,
    degree,
    experience,
    about,
    available,
    fees,
    address:JSON.parse(address),
    date:Date.now()
}
//saving doctor data to database

const newDoctor =new doctorModel(doctorData)
await newDoctor.save()
    res.json({success:true, message:"Doctor Added Successfully"});



}catch (error) {
console.log(error)
res.json({sucess:false,message:"Failed to add Doctor"})
}
};

// api for admin login

const loginAdmin= async (req, res) => {
    try {
        const {email, password} = req.body
        //validating email
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
            //टोकन के बिना यूज़र को प्रोटेक्टेड रूट्स (जैसे कि प्रोफाइल, बुकिंग, डॉक्टर लिस्ट) को एक्सेस करने की अनुमति नहीं मिलेगी।
//      API को एक्सेस करने के लिए हर बार लॉगिन करना पड़ेगा।
            }else{
               res.json({success:false,message:"invalid email"}) 
            }
       
            }catch (error) {
console.log(error)
res.json({sucess:false,message:"Failed to add Doctor"})
}
}

module.exports = {addDoctor,loginAdmin};

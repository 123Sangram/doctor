const express=require('express')
const { addDoctor,loginAdmin } = require('../controllers/adminController.js');
const upload = require('../middlewares/multer.js');
const authAdmin = require('../middlewares/authAdmin.js');

const adminRouter=express.Router()
adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
module.exports=adminRouter
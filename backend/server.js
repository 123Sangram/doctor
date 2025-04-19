
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv =require('dotenv')
dotenv.config()
const connectDB =require('./config/mongodb')
const connectCloudinary =require('./config/cloudinary')
const adminRouter = require('./routes/adminRoute.js');
const app = express()
const port = 3000

connectDB()
connectCloudinary()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// app.use(express.static('public'))
app.use('/api/admin',adminRouter)
app.get('/', (req, res) => {
    res.send('hello sangram')
    })
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
        });
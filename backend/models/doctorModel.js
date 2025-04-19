const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String, 
        required: false
    },
    speciality: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        required: false
    },
    available: {
        type: Boolean,
        default: true
    },
    fees: {
        type: Number,
        required: true
    },
     address: {
        line1: { type: String, required: true },  // Object format
        city: { type: String },
        pincode: { type: String }
    },
    date: {
        type: Number,
        required:true
    },
    slots_booked: {
        type: Object,
        default: {}
    }
},{minimize:false});

const doctorModel = mongoose.models.doctor ||  mongoose.model('Doctor', doctorSchema);

module.exports = doctorModel;

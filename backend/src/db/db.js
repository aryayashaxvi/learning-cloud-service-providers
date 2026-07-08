const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect("")
    console.log("db connected")
}

module.exports = connectDB
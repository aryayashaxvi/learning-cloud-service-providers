const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: String, //url stored in string format
    caption: String,
})

const postModel = mongoose.model("post", postSchema)
module.exports = postModel;
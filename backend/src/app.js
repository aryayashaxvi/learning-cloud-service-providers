// u can use aws s3 or imagekit or cloudinary for cloud storage provider
const express = require('express')
const multer = require('multer') 
const uploadFile = require("./services/storage_service")
const postModel = require("./models/post.model")

const app = express()
app.use(express.json())

const upload = multer({ storage : multer.memoryStorage()})
// iss baar aap ek image file bhej rhe ho

app.post('/create-post', upload.single('image'), async(req, res)=>{
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer)
    console.log(result);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message : "post created successfully",
        post
    })
})  

app.get('/create-post', (req, res) => {
    const posts = await postModel.find()

    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
})

module.exports = app
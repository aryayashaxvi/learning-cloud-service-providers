// Make sure to install the correct package: npm install imagekit
const ImageKit = require("imagekit");

// You must include all three of these credentials
const imagekit = new ImageKit({
    publicKey: "", 
    privateKey: "", 
    urlEndpoint: ""
});

async function uploadFile(buffer) {
    // Correct method is .upload(), not .files.upload()
    const result = await imagekit.upload({
        file: buffer, // multer's req.file.buffer works perfectly here
        fileName: "image.jpg"
    });

    return result;
}

module.exports = uploadFile;
const multer = require('multer')
const path = require('path')
const req = require("express/lib/request");
const storage = multer.diskStorage({
    destination:function(req,file,callback){
       callback(null,path.join(__dirname,"../my-uploads"))
    },
    filename:function(req,file,callback){
        const uniquePrefix = Date.now();
        callback(null,uniquePrefix+"-"+file.originalname)
    }
})

const fileFilter =(req,file,callback)=>{
if(file.mimetype = "image/jpeg"||file.mimetype=="image/png"||file.mimetype=="image/jpg"){
   callback(null,true)
}else{
   callback(null,false)
}
}


const options = {
    storage,
    fileFilter,
    limits:{
        fileSize:1024*1024*5
    }
}


const uploads = multer(options)
module.exports = uploads
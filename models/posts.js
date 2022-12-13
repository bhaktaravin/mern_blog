const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 


const postSchema = new Schema({
    title:{
        type: String, 
        require: true, 
        trim: true, 
        minlength: 3
    }, 

    body:{
        type: String, 
        require: true, 
        trim: true
    }, 
    author:{
        type: String, 
        require: true
    },
    date:{
        type: Date, 
        require: true
    }, 
    comments:[String]
},{timestamps: true});

const Post = mongoose.model("Post", postSchema); 

module.exports = Post; 

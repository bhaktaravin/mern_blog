const express = require('express'); 

const mongoose = require('mongoose'); 

const cors = require('cors'); 
const path = require('path'); 

require('dotenv').config({ path: "./config.env"}); 

const app = express(); 
app.use(express.json()); 
app.use(cors()); 

const PORT = process.env.PORT || 5000; 
const URI = process.env.ATLAS_URI; 

mongoose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const conn = mongoose.connection; 

conn.once("open", () => {
    console.log("MongoDB is connected...")
});

const postsRouter = require('./routes/posts'); 
app.use('/api/posts', postsRouter); 

if(process.env.NODE_ENV== 'production'){
    app.use(express.static("frontend/build"));

    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname,"../frontend", "build", "index.html")
        );
    });
}


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})
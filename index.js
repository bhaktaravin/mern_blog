const express = require('express');

const app = express(); 


const mongoose = require('mongoose'); 

const authenticationRoute = require('./routes/auth'); 
const userRoute = require('./routes/users'); 
const postRoute = require('./routes/posts'); 

const catRoutes = require('./routes/categories'); 
const multer = require('multer'); 
const cors = require('cors'); 
const path = require('path'); 


app.use(cors()); 

require('dotenv').config({ path: "./config.env"}); 

app.use(express.json()); 

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}) 
.then(console.log(`Connected to Database`))
.catch((error) => console.log(error)); 


const storage=multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,"images")
    },
    filename:(req,file,cd)=>{
        cd(null,req.body.name)
    }
});
const upload=multer({
    storage:storage
});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file Has been uploaded");
})

app.use("/v1/api/auth",authenticationRoute);
app.use("/v1/api/users",userRoute);
app.use("/v1/api/posts",postRoute);
app.use("/v1/api/categories",catRoutes);

const PORT = process.env.PORT; 

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
})

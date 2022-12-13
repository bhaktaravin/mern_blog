const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 

const passport = require('passport'); 

const users = require('./routes/api/users'); 


const app = express();
 
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json()); 

app.use(cors()); 

const db = require('./config/keys').mongoURI; 


mongoose.connect(db, { useNewUrlParser: true})
.then(() => console.log("MongoDB Successfully Connected")) 
.catch(err => console.log(err)); 

app.use(passport.initialize()); 
require('./config/passport')(passport); 

app.use('/api/users', users); 


const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
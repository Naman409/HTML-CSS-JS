const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost/contactDemo', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 8000;

// Define Mongoose Schema 
var contactSchema = new mongoose.Schema({
    name : String,
    address : String,
    email : String,
    mobno : String,
    degree : String
  });

var contact = mongoose.model('contact', contactSchema);

// EXPRESS SPECIFIC STUFF 
app.use('/static',express.static('static')); //For serving static file 
app.use(express.urlencoded());

// PUG SPECIFIC STUFF 
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views',path.join(__dirname,'views')); //Set the view directory

// ENDPOINTS
const params = { };
app.get('/',(req,res)=>{
res.status(200).render('home.pug',params);
});
app.get('/contact',(req,res)=>{
res.status(200).render('contact.pug',params);
});

app.post('/contact',(req,res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("Your Data has been saved to the Database");
    }).catch(()=>{
        res.status(400).send("Item was not saved to the Database");
    })
});

// START THE SERVER
app.listen(port, () => {
    console.log(`This application was started successfully on port ${port}`)
});
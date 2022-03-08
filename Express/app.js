const { text } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF 
app.use('/static',express.static('static')); //For serving static file 
app.use(express.urlencoded());

// PUG SPECIFIC STUFF 
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views',path.join(__dirname,'views')); //Set the view directory

// ENDPOINTS
const con = "This is the best content on internet so far so use it wisely";
const params = {'title':'Pubg is the best game','content':con};
app.get('/',(req,res)=>{
res.status(200).render('index.pug',params);
});

app.post('/',(req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    let mail = req.body.email;
    let address = req.body.address;
    let more = req.body.more;

    let outputToWrite = `The name of the client is ${name} , ${age} year old , mail id : ${mail} , residing at ${address} , and more about him/her is : ${more}`;

    fs.writeFileSync('output.txt',outputToWrite);
    const params = {'message':'Your form has been Submitted Successfully'};
    res.status(200).render('index.pug',params);
});

// START THE SERVER
app.listen(port, () => {
    console.log(`This application was started successfully on port ${port}`)
});
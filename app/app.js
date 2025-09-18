//testing that all works with terminal command aliases we just created in package.json
console.log("starting up app.js") //debug
//importing express
const express = require("express");
//calling the function that creates the process
const app = express();
//setting up port
const port = 3000;

//lets enable static  assets
app.use(express.static('public'));
//lets enable static  assets
app.use(express.static('public/'));
//enable json decoding for req.body (body parser)
app.use(express.json());
const connection = require("../app/resources/db/db")

app.get('/',(req,res)=>{
  res.send('welcome to my movies list');
})

app.listen(port,()=>{
  console.log(`listening on port ${port}`);
})
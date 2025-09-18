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

const moviesRoute = require('../app/routes/moviesRoute.js');

app.get('/',(req,res)=>{
  res.send('API server main page');
})

app.use('/movies', moviesRoute);

app.listen(port,()=>{
  console.log(`API server listening on port ${port}`);
})
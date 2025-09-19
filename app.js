//testing that all works with terminal command aliases we just created in package.json
console.log("starting up app.js") //debug
//importing express
const express = require("express");
//calling the function that creates the process
const app = express();
//lets enable static  assets
app.use(express.static('public'));

//enable json decoding for req.body (body parser)
app.use(express.json());
//calling in imagepath middleware
const imagePathMiddleware =require("./middlewares/imagePathMiddleware.js")
//calling in the errors handler middleware
const errorsHandler = require("./middlewares/errorsHandler.js");
//importing the notFound middleware
const notFound = require("./middlewares/notFound.js");
//setting up port
const port = 3000;
app.use(imagePathMiddleware);
//CORS SETUP
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: 'GET,POST,PUT,DELETE'
  
};

app.use(cors(corsOptions));

//setting up CRUD routes
const moviesRoute = require('./routes/moviesRoute.js');
//main route set
app.get('/',(req,res)=>{
  console.log("home page")
  res.send('API server main page');
})
app.use('/movies', moviesRoute);
app.use(errorsHandler);
app.use(notFound);

app.listen(port,()=>{
  console.log(`API server listening on port ${port}`);
})
// import express
const express = require('express');
const router = express.Router();

//we import the destructured controller 
const {index , show , create , modify , update , destroy} = require('../controllers/movieController.js')
// define all routes
//index for posts

router.get('/',index);
router.get('/',show);
router.get('/',create);
router.get('/',modify);
router.get('/',update);
router.get('/',destroy);

module.exports=router;
/**
 * @filename routes/home.js
 * @description home route
 */
 
 //module dependencies
const express = require( 'express' );
const homeController = require( '../controllers/home' );

//initial router
const router = express.Router();

//set route
const homeRoute = router.route('/');

//get method
homeRoute.get(homeController.get);

//export router
module.exports = router;

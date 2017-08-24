/**
 * @filename routes/login.js
 * @description login route
 */
 
 //module dependencies
const express = require( 'express' );
const loginController = require( '../controllers/login' );

//initial router
const router = express.Router();

//set route
const loginRoute = router.route('/login');

//get method
loginRoute.get(loginController.get);

//export router
module.exports = router;

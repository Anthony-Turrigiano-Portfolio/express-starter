/**
 * @filename app.js
 * @description App module for express.js
 */
 
 //module dependencies
 const path = require( 'path' );
 const express = require( 'express' );
 const dotenv = require( 'dotenv' );
 const routes = require( './routes' );
 
 //load local enviornment variables 
 dotenv.load();
 
 //initialize express
 const app = express();
 
 //set app variables
 app.set( 'HOST', process.env.HOST );
 app.set( 'PORT', process.env.PORT );
 app.set( 'ENV',  process.env.ENV);
 
 //reference static files
 app.use( express.static( path.join( __dirname, 'dist' ) ) );
 
 //app routes
 app.use( '/', routes );
 
 
 //export app
 module.exports = app;
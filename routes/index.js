/**
 * @filename routes/index.js
 * @description index module for app routes
 */
 
 const express = require( 'express' );
 const homeRoute = require( './home');
 const loginRoute = require( './login');

module.exports = [homeRoute, loginRoute];
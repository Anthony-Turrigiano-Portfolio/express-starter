/**
 * @filename controllers/home.js
 * @description home controller
 */

//module dependencies
const path = require('path');

//export module 
module.exports = {

    get: ( req, res ) => {
        res.sendFile(path.join(__dirname, "dist/index.html")); 
    }
    
};
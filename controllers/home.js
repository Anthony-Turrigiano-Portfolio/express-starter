/**
 * @filename controllers/home.js
 * @description home controller
 */

//export module 
module.exports = {

    get: ( req, res ) => {
        res.send('Hello World');    
    }
    
};
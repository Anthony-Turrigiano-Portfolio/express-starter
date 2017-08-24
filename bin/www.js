/**
 * @filename bin/www.js
 * @description start server
 */

//module dependencies
const http = require( 'http' );
const app = require( '../app' );
const localtunnel = require( 'localtunnel');
const chalk = require('chalk');

//create server
const server = http.createServer(app);

//listen
 server.listen(app.get('PORT'), app.get('HOST'), ()=>{
    
    //proxy app to localtunnel service 
    const tunnel = localtunnel(app.get('PORT'), {subdomain: process.env.SUBDOMAIN}, (err, tunnel) => {
        if(err)
            console.log(err);
        
        //log out message
        console.log('%s App is running locally at %s:%d in %s mode', chalk.green('✓'), app.get('HOST'), app.get('PORT'), app.get('ENV'));
        console.log('%s App is running remotely at %s in %s mode', chalk.green('✓'), tunnel.url, app.get('ENV'));
        console.log('  Press CTRL-C to stop\n');
    }); 
    
    tunnel.on('close', ()=>{
        console.log('tunnels are closed');
    });
    
 });
 
 
 
 //export server
 module.exports = server;
 
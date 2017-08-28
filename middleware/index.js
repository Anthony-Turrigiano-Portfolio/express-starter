const compression = require('compression');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const lusca = require('lusca');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const dotenv = require('dotenv');


dotenv.load();

module.exports = (app) => {
    app.use(logger('dev'));
    app.use(expressStatusMonitor());
    app.use(compression());
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(expressValidator());
    
    app.use(session({
      name: process.env.SESSION_NAME,
      resave: true,
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET,
      //store: new MongoStore({
        //url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
        //autoReconnect: true,
        //clear_interval: 3600
      //})
    }));
    app.use(lusca({
      csrf: true,
      policy:{
        'default-src':'\'self\'',
        'script-src':'\'self\'',
        'img-src':'\'self\'',
        'frame-ancestors':'\'self\'',
        'style-src': '\'self\'',
        'font-src': '\'self\''
    },
      xframe: 'SAMEORIGIN',
      p3p: 'ABCDEF',
      hsts: {maxAge: 31536000, includeSubDomains: true, preload: true},
      xssProtection: true,
      nosniff: true,
      referrerPolicy: 'origin'
  }));
};
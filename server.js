 'use strict'

 var express = require('express')

 var expressLayouts = require('express-ejs-layouts')

 var app = express()
 var port = 80


 // Use ejs and express layouts
 app.set('view engine', 'ejs')
 app.use(expressLayouts)


 // set static files (css, images, etc) location
 app.use(express.static(__dirname + '/public'))

 // route our app
 let router = require('./app/routes')
 app.use('/', router)


 // start the server
 app.listen(port, () => {
     console.log('App started')
 })

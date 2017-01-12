 'use strict'

 var express = require('express')

 var expressLayouts = require('express-ejs-layouts')

 var bodyParser = require('body-parser')

 var app = express()
 var port = 80


 // Use ejs and express layouts
 app.set('view engine', 'ejs')
 app.use(expressLayouts)

 // use body parser
 app.use(bodyParser.urlencoded({
    extended: true
 }))

  // set static files (css, images, etc) location
  app.use(express.static(__dirname + '/public'))

 // route our app
 let router = require('./app/routes')
 app.use('/', router)


 // start the server
 app.listen(port, () => {
     console.log('App started')
 })

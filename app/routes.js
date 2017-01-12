'use strict'
// require express
let express = require('express')
    // require path
let path = require('path')
    // create our router object
let router = express.Router()

// export our router
module.exports = router

var  formidable  =  require('formidable')
var util = require('util')

// Route for home page
router.get('/', (req, res) => {
    res.render('pages/home')
})

// Route for about page
router.get('/about', (req, res) => {
    let users = require('../data/users.json')
    res.render('pages/about', {
        users: users.users
    })
})

// Route for contact page
router.get('/contact', (req, res) => {
  var response = require('../data/test.js')
  res.render('pages/contact', {
      response: response.fields
  })
  console.log(JSON.stringify(response, null, 2))
})
router.post('/contact', (req, res) => {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        var fs = require('fs');
        let content = "var users = " + util.inspect({
            fields: fields,
            files: files
        })
        fs.writeFile("./data/test.js", content, function(err) {
            if (err) {
                return console.log(err)
            }

            console.log("The file was saved!")

        });
        // Log for debug
        // res.writeHead(200, {
        //     'content-type': 'text/plain'
        // });
        // res.write('received the data:\n\n');
        // res.end(util.inspect({
        //     fields: fields,
        //     files: files
        // }));
    });

    //    res.send('Thank you for contacting us, ' + req.body.name + '. We will respond shortly!')
    //    console.log(req.body)
})

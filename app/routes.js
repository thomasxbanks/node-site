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
    var response = require('../data/test.json')
    res.render('pages/home', {
        data: response.fields
    })
    console.log('from Home', response.fields.name)

    // ORIGINAL
    // res.render('pages/home')
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
    let response = require('../data/test.json')
    res.render('pages/contact', {data: response.fields})
})

// Route for the submission of the form to the "database"
router.post('/contact', (req, res) => {
    var jsonfile = require('jsonfile')
    var file = './data/test.json'
    var form = new formidable.IncomingForm()

    form.parse(req, function(err, fields, files) {

            let content = {
                fields: fields,
                files: files
            }

            jsonfile.writeFile(file, content, {
                spaces: 4
            }, function() {
                console.log('Written data:', content)
                let response = require('../data/test.json')
                res.render('pages/contact', {
                    data: response.fields
                })

            })


            // END form.parse
        })
        // END router.post
})

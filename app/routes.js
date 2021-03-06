'use strict'
// require express
let express = require('express')
    // require path
let path = require('path')
    // create our router object
let router = express.Router()

// export our router
module.exports = router

var  formidable = require('formidable')
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

// Route for Post page
router.get('/posts', (req, res) => {
    var jf = require('jsonfile')
    jf.readFile('./data/test.json', function(err, obj) {
            res.render('pages/posts', {
                data: obj.fields,
                hero: obj.files.upload.path.toString().replace(/\\/g, '/').replace('public/', '')
            })

        })
        // ORIGINAL
        // let response = require('../data/test.json')
        //res.render('pages/posts', {data: response.fields})
})

// Route for publish page
router.get('/publish', (req, res) => {
        let users = require('../data/users.json')
        var jf = require('jsonfile')
        jf.readFile('./data/users.json', function(err, obj) {
                console.log(err, obj.fields)
                res.render('pages/publish', {
                    users: obj.users
                })

            })
            // res.render('pages/contact', {
            //   users: users.users
            // })
    })
    // Route for the submission of the form to the "database"
router.post('/publish', (req, res) => {
    var jsonfile = require('jsonfile')
    var file = './data/test.json'
    var fs = require('fs')

    var form = new formidable.IncomingForm()
    form.uploadDir = "./public/img/"
    form.keepExtensions = true

    form.parse(req, function(err, fields, files) {

        let content = {
            fields: fields,
            files: files
        }


        console.log('files', files)


        jsonfile.writeFile(file, content, {
            spaces: 4
        }, function() {
            // log for debug
            //console.log('Written data:', content)

            let response = require('../data/test.json')
            let users = require('../data/users.json')

            res.render('pages/publish', {
                    data: response.fields,
                    hero: response.files.upload,
                    users: users.users
                })
                // log for debug
                //console.log(users)

        })


        // END form.parse
    })

    // END router.post
})

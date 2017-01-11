'use strict'
// require express
let express = require('express')
    // require path
let path = require('path')
    // create our router object
let router = express.Router()

// export our router
module.exports = router

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
    res.render('pages/contact')
})
router.post('/contact', (req, res) => {
    res.send('Thank you for contacting us, ' + req.body.name + '. We will respond shortly!')
    console.log(req.body)
})

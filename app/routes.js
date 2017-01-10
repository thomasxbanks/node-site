// require express
let express = require('express')
    // require path
let path = require('path')
    // create our router object
let router = express.Router()

let bodyParser = require('body-parser')
let urlEncodedParser = bodyParser.urlencoded({ extended: false })
// export our router
module.exports = router

// Route for home page
router.get('/', (req, res) => {
    res.render('pages/home')
})

// Route for about page
router.get('/about', (req, res) => {
    let users = [{
            name: 'Thom',
            email: 'thom@scrummable.com',
            avatar: '//placekitten.com/g/300/300'
        },
        {
            name: 'Rach',
            email: 'rach@scrummable.com',
            avatar: '//placekitten.com/g/400/400'
        },
        {
            name: 'Kiitos',
            email: 'kiitos@scrummable.com',
            avatar: '//placekitten.com/g/500/500'
        }
    ]
    res.render('pages/about', {
        users: users
    })
})

// Route for contact page
router.get('/contact', (req, res) => {
    res.render('pages/contact')
})
router.post('/contact', urlEncodedParser, (req, res) => {
    res.send('Thank you for contacting us, ' + req.body.name + '. We will respond shortly!')
    console.log(req.body)
})

const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'))
})

router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html')
})

// Route handlers
router.get('/hello(.html)?', (req, res, next) => {
    console.log('Attampted to load hello.html')
    next()
}, (req, res) => {
    res.send('Hello, World!')
})

// chaining route handlers
const one = (req, res, next) => {
    console.log('one')
    next()
}

const two = (req, res, next) => {
    console.log('two')
    next()
}

const three = (req, res) => {
    console.log('three')
    res.send('Finished')
}

router.get('/chain(.html)?', [one, two, three])

module.exports = router
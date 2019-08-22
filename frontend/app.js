const express = require('express')
const homeRouter = require('./src/routes/homeRoute')
const contactRouter = require('./src/routes/contactRoute')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('./assets'))

app.use('/', homeRouter)
app.use('/api', contactRouter )

console.log('ooiiiiii111')

module.exports = app
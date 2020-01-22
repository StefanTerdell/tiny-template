require('dotenv').config()
const express = require('express')
const mustacheExpress = require('mustache-express')()
const port =  process.env.LOCALHOST_PORT || process.argv[2] || 3000
const path = require('path')

const app = express()

app.engine('mst', mustacheExpress)
app.set('view engine', 'mst')
app.set('views', path.join(__dirname, '..', 'views'))
app.use('/static', express.static(path.join(__dirname, '..', 'static')));

app.get('/', (req, res) => {
    res.render('index', { myContent: "Hello world!", myMessage: "Hello console!" })
})

app.listen(port, () => console.log(`Listening at ${port}`))
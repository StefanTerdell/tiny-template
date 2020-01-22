require('dotenv').config()
const express = require('express')
const mustacheExpress = require('mustache-express')()
const port =  process.env.LOCALHOST_PORT || (process.argv[2] === '-p' ? process.argv[3] : 3000)
const path = (folder) => require('path').join(__dirname, '..', folder)

const app = express()

app.engine('mst', mustacheExpress)
app.set('view engine', 'mst')
app.set('views', path('views'))
app.use('/static', express.static(path('static')));

app.get('/', (req, res) => {
    res.render('index', { myContent: "Hello world!", myMessage: "Hello console!" })
})

app.listen(port, () => console.log(`Listening at ${port}`))
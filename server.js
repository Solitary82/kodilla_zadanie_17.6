var path = require('path')
var express = require('express')
var app = express()
app.use(express.static('logo'))


app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', function (req, res) {
  res.render('login')
})

app.get('/auth/google', function (req, res) {
  res.render('logged', {
    username: req.query.username
  })
})

app.listen(3000)

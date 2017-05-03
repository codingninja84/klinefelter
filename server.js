var express = require('express')
var app = express()
var path = require('path')
var bp = require('body-parser')
var session = require('express-session')

app.use(express.static(path.join(__dirname, "./public/dist")));
// app.use(express.static(path.join(__dirname, '/node_modules')))
// app.use(express.static(path.join(__dirname, '/bower_components')))

// app.use(session({
//   secret: 'keyboard cat',
//   resave: true,
//   saveUnitialized: false,
//   cookie: {secure:false}
// }))

app.use(bp.json())
require('./config/mongoose.js')
require('./config/routes.js')(app)

app.listen(8000, function() {
  console.log('listening to port 8000')
})

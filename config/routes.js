var session = require('../controllers/quoteController.js')

module.exports = function(app) {

  app.post('/auto', function(req, res) {
    console.log("Test routes")
    quoteController.auto(req, res)
  })
  app.post('/commercial', function(req, res) {
    console.log("Test routes")
    quoteController.commercial(req, res)
  })
  app.post('/home', function(req, res) {
    console.log("Test routes")
    quoteController.home(req, res)
  })
  app.post('/life', function(req, res) {
    console.log("Test routes")
    quoteController.life(req, res)
  })
}

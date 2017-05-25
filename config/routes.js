var quoteController = require('../controllers/quoteController.js')

module.exports = function(app) {

  app.post('/auto', function(req, res) {
    quoteController.auto(req, res)
  })
  app.post('/commercial', function(req, res) {
    quoteController.commercial(req, res)
  })
  app.post('/home', function(req, res) {
    quoteController.home(req, res)
  })
  app.post('/life', function(req, res) {
    quoteController.life(req, res)
  })
}

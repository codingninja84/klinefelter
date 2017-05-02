var session = require('../controllers/quoteController.js')
module.exports = function(app) {

  app.post('/auto', function(req, res) {
    console.log("Test routes")
    quoteController.auto(req, res)
  })
}

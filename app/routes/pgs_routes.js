module.exports = function(app, db) {
  app.post('/pgs', (req, res) => {
    res.send('Hello')
  })
}

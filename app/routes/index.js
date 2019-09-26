const pgsRoutes = require(./pgs_routes);

module.exports = function(app, db) {
  pgsRoutes(app, db)
}

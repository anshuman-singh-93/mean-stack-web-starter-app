'use strict';

/**
 * Module dependencies
 */
var  customers = require('../controllers/customers.server.controller');
var  users = require('../controllers/users.server.controller');

module.exports = function(app) {
  // Customers Routes
  app.route('/customers')
    .get(customers.list)
    .post(users.requiresLogin, customers.create);

  app.route('/customers/:customerId')
    .get(customers.read)
    .put(users.requiresLogin,customers.update)
    .delete(users.requiresLogin,customers.delete);

  // Finish by binding the Customer middleware
  app.param('customerId', customers.customerByID);
};

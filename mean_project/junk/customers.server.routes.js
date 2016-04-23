'use strict';

/**
 * Module dependencies
 */
var	customers = require('../controllers/customers.server.controller');

module.exports = function(app) {
	// Customers Routes
	app.route('/api/customers')
		.get(customers.list)
		.post(customers.create);

	app.route('/api/customers/:customerId')
		.get(customers.read)
		.put(customers.update)
		.delete(customers.delete);

	// Finish by binding the Customer middleware
	app.param('customerId', customers.customerByID);
};

var keystone = require('keystone');

keystone.init({

	'name': 'Lawyer & Sons',
		
	'auto update': true,
	'mongo': process.env.MONGO_URI || 'mongodb://mongo/lawyer-and-sons',

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'cookie-secret'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();

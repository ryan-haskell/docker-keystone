var keystone = require('keystone');

keystone.init({

	'name': process.env.SITE_NAME || 'KeystoneJS CMS',

	'auto update': true,
	'mongo': process.env.MONGO_URI || 'mongodb://mongo/keystone',

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'cookie-secret'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'menu': ['Food', 'FoodCategory', 'FoodIngredient'],
	'user': 'User'
});

keystone.start();

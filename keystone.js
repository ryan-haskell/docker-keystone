var keystone = require('keystone');

console.log(process.env);

keystone.init({
	
	'name': 'Lawyer & Sons',
	
	'favicon': 'public/favicon.ico',
	
	'auto update': true,
	'mongo': process.env.MONGO_URI || 'mongodb://localhost/lawyer-and-sons',
	
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'cookie-secret'
	
});
 
require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start();
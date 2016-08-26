exports = module.exports = function(req, res) {
        
    res.status(200).json({
    	message: "Welcome to Keystone! If you're looking for the sign-in page, append /keystone to this URL"
    });
    
};
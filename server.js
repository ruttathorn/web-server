var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req,res,next){
		console.log('private route hit!');
		next();
	},
	logger: function (req,res, next){

		console.log('Request: '+ new Date().toString()+ ' '+ req.method + ' '+ req.originalUrl);
		next();
	}
};
/*app.get('/', function(req,res){
	res.send('Hello Express!');
	
});*/

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('Fintech ใหม่ ไฟแรง!!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express server start on port '+ PORT);
});
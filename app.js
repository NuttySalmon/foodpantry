var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	expressSession = require("express-session"),
	connectMongo = require('connect-mongo'),
	MongoStore = connectMongo(expressSession);


//requiring routes
var	indexRoutes = require("./routes/index"),
	config = require("./config");

//connect to mongodb
mongoose.connect(config.mongoUri);

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRoutes);

app.set("view engine", "ejs");
app.use('/', express.static(__dirname + '/www'));

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log('Server started on port ' + app.get('port'));
});

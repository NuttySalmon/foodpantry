var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	expressSession = require("express-session"),
	connectMongo = require('connect-mongo'),
	MongoStore = connectMongo(expressSession);


//requiring routes
var	indexRoutes = require("./routes/index"),
	categoryRoutes = require("./routes/category"),
	inventoryRoutes = require("./routes/inventory"),
	registerRoutes = require("./routes/register"),
	config = require("./config");

//connect to mongodb
mongoose.connect(config.mongoUri);

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/category", categoryRoutes);
app.use("/register", registerRoutes);

app.set("view engine", "ejs");
app.use('/', express.static(__dirname + '/www'));
app.use('/bootstrap/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect JS for bootstrap
app.use('/bootstrap/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS for bootstrap
app.use(express.static(__dirname + "/public"));

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log('Server started on port ' + app.get('port'));
});

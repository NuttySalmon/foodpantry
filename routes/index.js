var express = require("express"),
	Category = require("../models/category"),
	Barcode = require("../models/barcode"),
    router = express.Router();

const querystring = require('querystring'); 

router.get("/", function(req, res){
	Category.find({})
		.sort({order: 1})
		.exec(
		function (err, result) {
		res.render("main", {categoryArr: result, msg: req.query.msg});
	});
});

router.get("/add", function(req, res){
	Category.find({}, function (err, result) {
		
		var catArr = [];
		for (let cat of result){
			console.log(cat.name);
			catArr.push(cat.name);
		}
		res.render("add", {categoryArr: catArr, msg: req.query.msg});
	});
});


router.post("/add", function(req, res){
	console.log(req.body.category);
	Category.findOne({ "name": req.body.category}, function(err, cat) {

		newBarcode = {
			barcode: req.body.barcode,
			name: req.body.name,
			detail: req.detail,
			category: cat._id
		};


		Barcode.create(newBarcode, function(err, bar){
			cat.barcodeList.push(bar._id);
			cat.save();
		});

		var message = newBarcode.name + " added.";
		console.log(message);
		const query = querystring.stringify({
          "msg": message
      	});
		res.redirect("/add?" + query);
	})
	
});

module.exports = router;
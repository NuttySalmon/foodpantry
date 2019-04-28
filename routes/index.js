var express = require("express"),
	Category = require("../models/category"),
	Barcode = require("../models/barcode"),
    router = express.Router();

const querystring = require('querystring'); 

router.get("/add", function(req, res){
	Category.find({}, function (err, result) {
		
		var catArr = [];
		for (let cat of result){
			console.log(cat.name);
			catArr.push(cat.name);
		}
		res.render("add", {categoryArr: catArr, msg: req.query.msg})
	});
});


router.post("/add", function(req, res){
	newBarcode = {
		barcode: req.body.barcode,
		name: req.body.name,
		detail: req.body.detail
	};

	Barcode.create(newBarcode);
	var message = newBarcode.name + " added."
	console.log(message);
	const query = querystring.stringify({
          "msg": message
      });
	res.redirect("/add?" + query);
});

module.exports = router;
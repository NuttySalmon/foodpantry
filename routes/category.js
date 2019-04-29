var express = require("express"),
	Category = require("../models/category"),
    router = express.Router(),
    Barcode = require("../models/barcode");

router.get("/new", function(req, res){
  	res.render("category/new");
});

router.post("/new", function(req, res){
	newCat = {name: req.body.name};
	Category.create(newCat);
	var message = newCat.name + " added."
	console.log(message);
	res.redirect("#?" + message);
});

router.get("/:name", function(req, res){
	Category.findOne({name: req.params.name})
		.populate({
			path: "barcodeList"
		})
		.exec(function(err, cat){
			console.log(cat);
			res.render("category/page", {name: cat.name, barArr: cat.barcodeList});
		});
});
module.exports = router;
//Comments Create
var express = require("express"),
	Category = require("../models/category");
    router = express.Router();

router.get("/register", function(req, res){
  	res.render("register")
});

router.get("/in", function(req, res){
 	res.render("in")
});

router.get("/out", function(req, res){
  	res.render("out")
});

router.get("/new-category", function(req, res){
  	res.render("new-category")
});

router.post("/new-category", function(req, res){
	newCat = {name: req.body.name};
	Category.create(newCat);
	var message = newCat.name + " added."
	console.log(message);
	res.render("new-category", {msg: message});
});

router.get("/add", function(req, res){
	Category.find({}, function (err, result) {
		console.log(result);
		categoryArr = []
		for (let cat of result){
			categoryArr.push(cat.name);
		}
		res.render("add", categoryArr)
	});
});

module.exports = router;
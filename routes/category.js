var express = require("express"),
	Category = require("../models/category");
    router = express.Router();

router.get("/new", function(req, res){
  	res.render("category/new")
});

router.post("/new", function(req, res){
	newCat = {name: req.body.name};
	Category.create(newCat);
	var message = newCat.name + " added."
	console.log(message);
	res.redirect("category/new", {msg: message});
});

module.exports = router;
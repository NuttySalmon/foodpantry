var express = require("express"),
	Category = require("../models/category"),
    router = express.Router();

router.get("/register", function(req, res){
  	res.render("register")
});



router.get("/add", function(req, res){
	Category.find({}, function (err, result) {
		
		var catArr = [];
		for (let cat of result){
			console.log(cat.name);
			catArr.push(cat.name);
		}
		res.render("add", {categoryArr: catArr})
	});
});

module.exports = router;
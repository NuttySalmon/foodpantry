var express = require("express"),
    router = express.Router(),
    Pantry = require("../models/pantry");


const querystring = require('querystring'); 


router.get("/", function(req, res){
  	res.render("register", {msg:req.query.msg})
});

router.post("/", function(req, res){
	newPantry = {
		name: req.body.name,
		phone: req.body.phone,
		email: req.body.email,
		address: req.body.address
	};

	Pantry.create(newPantry);
	var message = newPantry.name + " added."
	console.log(message);
	const query = querystring.stringify({
          "msg": message
      });
	res.redirect("?" + query);
});

module.exports = router;
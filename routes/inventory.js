var express = require("express"),
    router = express.Router();

router.get("/in", function(req, res){
 	res.render("inventory/in")
});

router.get("/out", function(req, res){
  	res.render("inventory/out")
});

router.post("/in", function(req, res){
 	res.render("inventory/in")
});


module.exports = router;
//Comments Create
var express = require("express"),
    router = express.Router();
router.get("/register", function(req, res){
  res.render("register")
});

module.exports = router;
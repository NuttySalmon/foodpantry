//Comments Create
var express = require("express"),
    router = express.Router();
router.get("/addpantry",function(req, res){
  res.render("addpantry")
});

module.exports = router;
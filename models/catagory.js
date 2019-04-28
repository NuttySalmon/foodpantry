var mongoose = require("mongoose");

var catagorySchema = mongoose.Schema({
    name: String,
    details: String
});

module.exports = mongoose.model("Catagory", catagorySchema);
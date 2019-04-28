var mongoose = require("mongoose");

var categorySchema = mongoose.Schema({
    name: String,
    details: String
});

module.exports = mongoose.model("Category", categorySchema);
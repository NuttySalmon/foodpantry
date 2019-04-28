var mongoose = require("mongoose");

var pantrySchema = mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    email: String
});

module.exports = mongoose.model("Pantry", pantrySchema);
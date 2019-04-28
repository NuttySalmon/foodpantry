var mongoose = require("mongoose");

var barcodeSchema = mongoose.Schema({
    name: String,
    barcode: String,
    detail: String,
	itemList: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Item"
	}]
});

module.exports = mongoose.model("Barcode", barcodeSchema);
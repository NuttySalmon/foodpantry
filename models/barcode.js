var mongoose = require("mongoose");

var barcodeSchema = mongoose.Schema({
    name: String,
    category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category"
	},
    detail: String,
    category: String,
	itemList: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Inventory"
	}]
});

module.exports = mongoose.model("Barcode", barcodeSchema);
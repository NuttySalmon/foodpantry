var mongoose = require("mongoose");

var barcodeSchema = mongoose.Schema({
    name: String,
    code: String,
    category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category"
	},
    detail: String,
	itemList: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Inventory"
	}]
});

module.exports = mongoose.model("Barcode", barcodeSchema);
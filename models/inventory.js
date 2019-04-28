var mongoose = require("mongoose");

var inventorySchema = mongoose.Schema({
	barcode: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Barcode"
	},
	count: {type: Number, default: 0},
	pantry: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Pantry"
	}
});

module.exports = mongoose.model("Inventory", inventorySchema);
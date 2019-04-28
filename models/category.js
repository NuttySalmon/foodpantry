var mongoose = require("mongoose");

var categorySchema = mongoose.Schema({
    name: String,
    details: String,
    barcodeList:[{
    	type: mongoose.Schema.Types.ObjectId,
		ref: "Barcode"
    }]
});

module.exports = mongoose.model("Category", categorySchema);
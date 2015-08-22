var mongoose = require('mongoose');

var DivisionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Division", DivisionSchema);

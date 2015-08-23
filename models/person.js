var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    givenName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: false
    },
    familyName: {
        type: String,
        required: false
    },
    rank: {
        type: String,
        required: true
    },
    division: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Division',
        required: false
    },
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
        required: false
    }]
});

module.exports = mongoose.model("Person", PersonSchema);

var mongoose = require('mongoose');

var GroupMemberSchema = new mongoose.Schema({
    person_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
        required: true
    }
});

module.exports = mongoose.model("GroupMember", GroupMemberSchema);

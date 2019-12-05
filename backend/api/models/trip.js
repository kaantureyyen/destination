const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date_of_trip: {type: Date}, //, required: true},
    date_of_publish: {type: Date}, //, required: true},
    destination: {type: String}, //, required: true},
    members: {type: Array},
    requests: {type: Array},
    number_of_members: {type: Number},
    isOpen: {type: Boolean}
});

module.exports = mongoose.model('Trip', tripSchema);
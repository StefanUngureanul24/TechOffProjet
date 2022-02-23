const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    warranty_years: { type: Number, required: true },
    availabe: { type: Boolean, required: true },
});

module.exports = mongoose.model('userSchema', userSchema);
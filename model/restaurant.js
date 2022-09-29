const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    restaurant: String,
    tags: String,
    city: String,
    comment: String,
    
})

module.exports = mongoose.model('Restaurant', restaurantSchema);
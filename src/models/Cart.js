const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        productId: {
            type: Schema.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            default: 1
        },
    }],
},
{
    timestamps: true
});

module.exports = mongoose.model('Cart', CartSchema);
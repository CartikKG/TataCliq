const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId
const cartSchema = new mongoose.Schema({
    owner : {
      type: ObjectID,
       required: true,
       ref: 'users'
     },
    product: [{
      productId: {
       type: ObjectID,
       ref: 'products',
       required: true
    },
    name: String,
    quantity: {
       type: Number,
       required: true,
       min: 1,
       default: 1},
       price: Number
     }],
    bill: {
        type: Number,
        required: true,
       default: 0
      }
    }, {
    timestamps: true
    })
    const Cart =mongoose.model('carts',cartSchema);
    module.exports=Cart;

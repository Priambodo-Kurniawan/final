const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let propertySellSchema = new Schema({
  name: {type: String, required: [true, `{PATH} must be filled`]},
  image: {type: String, required: [true, `{PATH} must be filled`]},
  status: { type: String, default: 'sell'},
  city: {type: String, required : [true,'{PATH} must be filled']},
  descr: {type: String, required: [true, `{PATH} must be filled`]},
  price: {
    type : Number,
    required: [true, `{PATH} must be filled`]
  },
  isActive: {type: Boolean, default: true},
  _ownerId: {type:Schema.Types.ObjectId, ref: 'User'},
  _categoryId: {type:Schema.Types.ObjectId, ref: 'Category'},
  _accessId: [{type:Schema.Types.ObjectId, ref: 'Access'}],
})

let propertySell =  mongoose.model('propertySell',propertySellSchema)

module.exports = propertySell;
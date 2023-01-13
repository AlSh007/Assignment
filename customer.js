const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const customersSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  company_name: { type: String, required: true },
  email: { type: email, required: true },
  password: { type: String, required: true },
  website: { type: String },
  address: { type: String },
  logo: { type: Image },
  strength: { type: String }
});

const Customers = mongoose.model('Customers', customersSchema);
module.exports=Customers;




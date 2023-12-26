var mongoose = require('mongoose');
var CompanySchema = mongoose.Schema({
   name: String,
   address: String,
   image: String,
});

var CompanyModel = mongoose.model('companies', CompanySchema); 
module.exports = CompanyModel;
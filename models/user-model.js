/* Dependencies */
var restful = require('node-restful');
var mongoose = restful.mongoose;

/* Model definition */
var UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }
    // created_date: {
    //     type: Date,
    //     default: Date.now
    // }
});

/* Model return */
module.exports = restful.model('Users', UserSchema);
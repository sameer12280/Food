const mongoose = require('mongoose')

const schema  = mongoose.Schema({
    name:String,
    image:String
})

const Food = mongoose.model('Food',schema)
module.exports = Food
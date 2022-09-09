
const mongoose = require('mongoose')


const SerieSchema = mongoose.Schema({
    name: String,
    status: {
        type:String,
        enumValues: ['to-watch', 'watching','watched' ]
    },
    comments:[String]
})
const Serie = mongoose.model('Serie', SerieSchema)

module.exports = Serie
const { Schema, model } = require('mongoose')

const imageSchema = Schema({
    name: String,
    img: {
        data: Buffer,
        contentType: String
    }
})

module.exports = model('Image', imageSchema)
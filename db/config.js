const mongoose = require('mongoose')

const dataBaseConnection = async() => {
    try {
        await mongoose,mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database Connect!!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { dataBaseConnection }
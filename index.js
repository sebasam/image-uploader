const express = require('express')
const app = express()
const cors = require('cors')
const imageRoute = require('./routes/image.routes')

const PORT = 3005

require('dotenv').config()

const { dataBaseConnection } = require('./db/config')
dataBaseConnection()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/', imageRoute)

app.listen(PORT, () => {
    console.log(`Server Running on port ${ PORT }`)
})
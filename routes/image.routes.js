const express = require('express')
const router = express.Router()
const { upload } = require('./../middlewares/storage')
const { uploadImage } = require('./../controllers/image.controller')

router.post('/upload', upload.single('image'), uploadImage)

module.exports = router
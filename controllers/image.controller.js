const Image = require('./../models/Image')
const fs = require('fs')

const uploadImage = async(req, res) => {
    const { name } = req.body
    try {
        const image = new Image({
            name: name,
            img: {
                data: fs.readFileSync(`uploads/${ req.file.filename }` ),
                contenType: 'image/png'
            }
        })
        image.save()
        res.status(200).json({
            ok: true,
            msg: 'Image uploaded'
        })
    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: 'Ups the upload has failed!',
            error: error
        })
    }
}

module.exports = { uploadImage }
const {config} = require('dotenv')

config()

exports.MONGO_URL = process.env.MONGO_URL || ''

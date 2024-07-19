const mongoose = require('mongoose')
require('dotenv').config()

const { MONGO_URL } = process.env;

const connectToMongoDB = async () => {
    try {        
        await mongoose.connect(MONGO_URL)
        console.log("Succesfully connected to MongoDB")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectToMongoDB;
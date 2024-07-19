const mongoose = require('mongoose')


const sensorDataSchema = new mongoose.Schema({
    soilMoisture: Number,
    temperature: Number,
    humidity: Number,
    timestamp: {
        type: Date,
        default: Data.now
    }    
})

const sensorData = mongoose.model('SensorData', sensorDataSchema)
module.exports = sensorData
const express = require('express')
const connectToMongoDB = require('./db')

// create new express app
const app = express()
const PORT = 4000

// middleware
app.use(express.json())

// Connect to Database
connectToMongoDB()

// routes
app.get('/', (req, res) => {
    console.log("get requrest")
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log('A server is running on port', PORT)
})
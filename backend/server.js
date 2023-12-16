require('dotenv').config()

const express = require('express')

// Express App
const app = express()

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.get('/', (req, res) => {
    res.json({msg : 'Welcome to To Do App'})
})

// Listen fo request
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})

process.env
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env
const uc = require('./user_controller.js')

app.use(express.json())

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set!')
    app.listen(SERVER_PORT, () => console.log(`Cruising on port ${SERVER_PORT}`))
})

app.get('/api/users', uc.getAllUsers)
app.get('/api/user/:id', uc.getUserById)
app.post('/api/adduser', uc.addUser)

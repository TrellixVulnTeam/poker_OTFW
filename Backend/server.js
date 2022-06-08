const express = require('express')
const dontenv = require('dotenv')
const socketIO = require('socket.io')
const http = require('http')
let cors = require('cors')

const server = express();

const httpServer = http.createServer(server)

const socketServer = socketIO(httpServer, {
    cors: {
        origin: '*'
    }
})


server.use(json())

server.use('/api/users', userRoutes);
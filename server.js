var express = require("express")
var app = express()
var server = app.listen(3000, ()=> {
    console.log("My servers running")
})
app.use(express.static('public'))
var socket = require('socket.io')
io = socket(server)
io.sockets.on('connection', (socket)=> {
console.log(socket.id)
socket.on('mouse', (data)=> {
    socket.broadcast.emit('mouse', data)
    //io.socket.emit('mouse', data)
})
})
// import { Server } from 'node-osc';
require('dotenv').config()
const Server = require('node-osc').Server

var oscServer = new Server(process.env.ARDUINO_PORT, '0.0.0.0', () => {
  console.log('OSC Server is listening');
});

oscServer.on('message', function (msg) {
  console.log(`Message: ${msg}`);
  oscServer.close();
});
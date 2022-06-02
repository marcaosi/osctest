require('dotenv').config()
// import { Client } from 'node-osc';
const Client = require('node-osc').Client

const client = new Client(process.env.ARDUINO_IP, process.env.ARDUINO_PORT);
client.send('/oscAddress', 200, () => {
  client.close();
});
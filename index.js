const dotenv = require('dotenv');
const SerialPort = require('serialport');
const Axios = require('axios').default;
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0');
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

dotenv.config();

const api = Axios.create({
    baseURL: process.env.API_URL,
    headers: { 'Content-Type': 'application/json' }
});

parser.on('data', async (data) => {
    try {
        const json = JSON.parse(data);

        const response = await api.post('/weather', json);
        console.log(response.data);
        
    } catch (err) {
        console.log('Error parsing data');
        console.log(err);
    }
})
# Arduino Weather Station NodeJS Reader

This project is basically a reader for a serial port from your computer or raspberry pi;
It should be used to get data from the Arduino present on a Serial Port and then it sends the collected data do the `/weather` endpoint, on the deployed AWS Api Gateway. You can find the CDK infrastructure and the instructions to get it deployed here: https://github.com/dariorlima/arduino-weather-station-cdk

## Getting start

### Installing dependencies

`npm install`

### Creating .env file

You should create the .env file on the root of you project and add the following variables:

NAME | VALUE |
--- | --- | 
API_URL | https://your-api-gateway-url.com 

### Running the project

`node index.js`

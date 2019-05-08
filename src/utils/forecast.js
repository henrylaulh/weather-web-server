const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/741cf33a73bea55b038c2b62b9a4c520/' + lat + ',' + long

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + '\r\n'
                + ' It is currently ' + body.currently.temperature + ' degrees out. \r\n' 
                + ' There is a ' + body.currently.precipProbability + '% chance of rain. \r\n'
                + ' UV index of the day is ' + body.currently.uvIndex + '.'
            )
        }
    })
}

module.exports = forecast
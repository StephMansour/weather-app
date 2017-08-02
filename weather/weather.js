const request = require('request');


var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/0fd93abbc51a94bd503d5c9e87027d46/${lat},${lng}`,
    json: true
  }, (err, resp, body) => {
    if(!err && resp.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }else {
      callback('Unable to fetch weather.')
    }
  })
};

module.exports.getWeather = getWeather;
